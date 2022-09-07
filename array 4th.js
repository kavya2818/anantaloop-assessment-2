const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

const num=[];

app.post("/",(req,res,next)=>{
    const word=req.body.name;
    console.log(word);
    num.push(word);
    res.redirect("/");
});


app.get("/",(req,res,next)=>{
    if(num.length>0)
        res.send(num[num.length-1]);
    else
        res.send("<h2>Hi this is javascript</h2>");
});

app.listen(8000);