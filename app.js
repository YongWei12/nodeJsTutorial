// core modules--> look for a global module in node js
const http = require('http');

const express = require('express');

//express exports as a function
const app = express();

app.use((req, res, next)=>{
    console.log('in the middleware ');
    next();//allow request to continue to the next middleware
});

app.use((req, res, next)=>{
    console.log('in another middleware ');
    res.send('<h1>Hello from expressJS</h1>');
});

app.listen(3000);