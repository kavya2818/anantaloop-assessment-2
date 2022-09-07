
const bodyParser=require("body-parser");
const express=require("express");

const app=express();
app.use(bodyParser.urlencoded({extended:false}));


app.post("/file",(req,res,next)=>{
    let number=req.body;
    console.log("Entered number is: "+number);

    const num=document.getElementById("number").value;
    let isPrime;
    for(let j=2; j<=number; j++){
        isPrime=1;
        for(let j=2; j<=i/2; j++)
        if(i%j==0){
            isPrime=0;
            break;
        }
    }
    if(isPrime==1){
        console.log(num);
        res.end();
    }
});

app.listen(5000);