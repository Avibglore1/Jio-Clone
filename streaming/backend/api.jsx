const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(cors());

app.get('/memoryIntensive', function(req,res){
    console.log('reading the content');
    const fileContent = fs.readFileSync('wa-clone-main.zip');
    console.log('content read finish');
    res.send(fileContent);
})

app.listen(3000,function(){
    console.log('Server running at port 3000');
})