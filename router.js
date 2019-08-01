const os = require('os'); 
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/user',userWs);

app.get("/", (req,res)=>{
    mongoose.connect 
    res.send('welcome to the server');
});

app.listen(3000,  ()=> {  
    console.log('server started');
})
