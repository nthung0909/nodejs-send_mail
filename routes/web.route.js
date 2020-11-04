const express=require("express");
const mail=require('../utils/mailer');
const router=express.Router();

router.post('/send-mail',async(req,res)=>{
    return await mail(req.body.to,req.body.subject,req.body.body);
});