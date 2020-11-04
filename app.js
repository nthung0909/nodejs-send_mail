const express=require("express");
const nodemailer=require("nodemailer");
const path=require('path');
const app=express();

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.get('/',(req,res)=>{
    return res.sendFile(path.join(`${__dirname}/views/index.html`))
})
app.post('/send-mail',(req,res)=>{
    res.send(req.body);
})

app.listen(3001,(req,res)=>{
    console.log("app is running at port 3001");
})