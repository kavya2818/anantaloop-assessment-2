const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/input-data',(req,res,next)=>{
  res.send('<body><form action="/file" method="POST"><input type="text" name="message"><button type="submit">upload</button></form></body>');
});
app.use('/file',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req,res,next)=>{
  res.send('<h1></h1>');
});
app.listen(5500);