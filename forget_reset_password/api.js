const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const UserModel = require('./userModel');
const emailSender = require('./DynamicEmailSender');
const {getCurrentMovies, getTopRatedMovies} = require('./movieController');
// const {getCurrentMovies, getTopRatedMovies} = require('./')

dotenv.config();
/******************db connection************* */

const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.98clx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink).then(function(connection){
    console.log('conected to db')
}).catch(err=>console.log(err));

/********************************************** */

app.use(express.json());
app.use(cookieParser());

const jwt = require('jsonwebtoken');
const util = require('util');
const promisify = util.promisify;
const promisifiedJwtSign = promisify(jwt.sign);


async function signupHandler(req,res){
    try{
        const userObject = req.body;
        if(!userObject.email || !userObject.password){
            return res.status(400).json({
                message: 'required data missing',
                status: 'failure'
            })
        }
        const user = await UserModel.findOne({email: userObject.email});
        if (user){
            return res.status(400).josn({
                message: 'user already loggedIn',
                status: 'failure'
            })
        }
        const newUser = await UserModel.create(userObject);
        res.status(201).json({
            message: 'user signup successfull',
            user: newUser,
            status: 'sucess'
        })
    }catch(err){
        console.log('err', err);
        res.status(500).json({
            message: err.message,
            status: 'failure'
        })
    }
}

async function loginHandler(req,res){
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({
                message: 'Invalid email',
                status: 'failure'
            })
        }
        const areEqual = password == user.password;
        if(!areEqual){
            return res.status(400).json({
                message: 'Inavlid username or password',
                status: 'failure'
            })
        }
        const authToken = await promisifiedJwtSign({id: user['id']}, process.env.secretkey);
        res.cookie('jwt', authToken,{
            maxAge: 1000*60*60*24,
            httpOnly: true
        })
        res.status(200).json({
            message: 'login successfull',
            status: 'success',
            user: user
        })
    }
    catch(err){
        console.log('err', err);
        res.status(500).json({
            message: err.message,
            status: 'failure'
        })
    }
}

const otpGenerator = function(){
    return Math.floor(100000 + Math.random()*900000);
}

async function forgetPasswordHandler(req,res){
    try{
        if(req.body.email == undefined){
            return res.status(400).json({
                status: 'failue',
                message: 'Please enter messge for forget password'
            })
        }
        const user = await UserModel.findOne({email:req.body.email});
        if(user==null){
            return res.status(404).json({
                message: 'usernot found for this mail',
                status: 'failure'
            })
        }
        const otp = otpGenerator();
        user.otp = otp;
        user.otpExpiry = Date.now() + 1000*60*10;

        await user.save({validateBeforeSave: false});

        res.status(200).json({
            message: 'otp is sent successfully',
            status: 'success',
            otp: otp,
            resetURL: `http:localhost:3000/api/auth/resetPassword/${user['_id']}`
        })
        const templateData = {name: user.name, otp: user.otp}
        await emailSender('./templates/otp.html', user.email, templateData);
    }catch(err){
        console.log('err', err);
        res.status(500).json({
            message: err.message,
            status: 'failure'
        })
    }
}

async function resetPasswordHandler(req,res){
    try{
        let resetDetails = req.body;
        if(!resetDetails.password || !resetDetails.confirmPassword || !resetDetails.otp ||
            resetDetails.password != resetDetails.confirmPassword
        ){
            res.status(401).json({
                status: 'failure',
                message: 'invalid request'
            })
        }
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);
        if(user == null){
            return res.status(404).json({
                status:'failure',
                message: 'user not found'
            })
        }
        if(Date.now()>user.otpExpiry){
            return res.status(401).json({
                status: 'failure',
                message: 'otp is incorrect'
            })
        }
        if(user.otp != resetDetails.otp){
            return res.status(401).json({
                status: 'failure',
                message: 'otp is incorrect'
            })
        }
        user.password = resetDetails.password;
        user.confirmPassword = resetDetails.confirmPassword;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();
        res.status(200).json({
            status: 'success',
            message: 'password reset successfull'
        })

    }catch(err){
        console.log('error', err);
        res.status(500).json({
            message: err.message,
            status: 'failure'
        })
    }
}

app.post("/api/auth/login", loginHandler);
app.post("/api/auth/signup", signupHandler);
app.patch("/api/auth/forgetPassword", forgetPasswordHandler);
app.patch("/api/auth/resetPassword/:userId", resetPasswordHandler);
app.get("/api/movies/currentPlaying", getCurrentMovies);
app.get("/api/movies/topRated", getTopRatedMovies);


app.listen(3001, function () {
    console.log("Server started on port 3001");
})