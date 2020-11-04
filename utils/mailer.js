const nodemailer=require('nodemailer');
const adminmail='nthung0909@gmail.com';
const adminpassword='Cuamotcang123@';
const mailHost = 'smtp.gmail.com';
const mailPort = 587;

const sendMail=(to,subject,htmlcontent)=>{
    const transporter = nodemailer.createTransport({
        host:mailHost,
        port:mailPort,
        secure:false,
        auth:{
            user:adminmail,
            pass:adminpassword
        }
    })
    const options ={
        from:adminmail,
        to:to,
        subject:subject,
        html:htmlcontent
    }
    return transporter.sendMail(options);
}

module.exports=sendMail;