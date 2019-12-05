const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();


app.get('/api',(req,res) => {
    res.json({message: "Welcome to the api"});
});

app.post('/api/posts', verifyToken , (req,res) => {
    jwt.verify(req.token,'secretkey',(err,data) => {
        if(err) throw err;
        else {res.json({
            msg: "post called",
            data
        });
    }
    });
});

app.post('/api/login',(req,res) => {
    //mock user
    const user = {
        id: 1,
        uname: "Luv",
        email: "abc@gmail.com"
    }

    jwt.sign({user: user} , 'secretkey' , (err,token) => {
        res.json({
            token
        });
    });
});

function verifyToken(req,res,next){
    //get auth header value
    const bearerheader = req.headers['authorization'];
    req.token = bearerheader;
    next();
}

app.listen(8000 , () => console.log("Server started"));