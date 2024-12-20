const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());

// app.get('/memoryIntensive', function(req,res){
//     try{
//         console.log('reading the content');
//         const fileContent = fs.readFileSync('Jio-clone-main.zip');
//         console.log('content reading finish');
//         res.send(fileContent);
//     }catch(err){
//         console.log('err', err);
//         response.status(500).json({
//             status: 'failure',
//             message: err.message
//         })
//     }
   
// })

app.get("/streamfile", function (req, res) {
    try{
        console.log("file readStream created");
        // const fileStreamInstance = fs.createReadStream("chat-app.zip");
        const videoStreamInstance = fs.createReadStream("video.mp4");
        // request , response -> streams 
        // request -> readble stream 
        // response -> writable stream
        res.writeHead(200, {
            "Content-Type": "video/mp4"
        })
        videoStreamInstance.pipe(res);
    }catch(err){
        console.log('err', err);
        response.status(500).json({
            status: 'failure',
            message: err.message
        })
    }
    
})

app.listen(3000, function () {
    console.log("server is runnig at port 3000");
})