const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


// thorugh which service you have to send the mail 
const sendGridDetails = {
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: "avinashkumarofficial95@gmail.com",
        pass: 'tqmn psbp eagf etrk'
    }
}

const msg = {
    to: 'singhavinash3534@gmail.com',
    from: 'avinashkumarofficial95@gmail.com', // Change to your verified sender
    subject: 'Sending First Email',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

const transporter = nodemailer.createTransport(sendGridDetails);

transporter
.sendMail(msg)
.then(() => {
    console.log('Email sent')
})
    .catch((error) => {
        console.error(error)
    })