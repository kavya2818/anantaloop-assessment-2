const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: false}));

const http=require('http');
const fs=require('fs');

app.use('/',(req,res,next)=>{
if(req.method==="GET"){
  res.writeHead(200,{"Content-Type":"text/html"});
  fs.createReadStream("./public/form.html","UTF-8").pipe(res);

}else if(req.method==="POST"){
let data = "";
req.on("data",(chunk)=>{
  data +=chunk;
});
req.on("end",()=>{
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(`
  ${data}
  `);
});
}
});
Server.listen(3000);