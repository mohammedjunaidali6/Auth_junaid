// require('dotenv').config();
// const { SENDGRID_API_KEY,SENDGRID_EMAIL } = process.env;
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// exports.emailOTPSend = (req, res)=>{ 
//     if(!req.query.email){
//         return res.status(400).send({msg:'You need to send email'});
//     }
//     const otp = Math.floor(100000 + Math.random()*900000);
//     const msg = {
//         to: req.query.email,
//         from : process.env.SENDGRID_EMAIL,
//         subject : "six digit Random OTP",
//         text: "Random OTP",
//         html: `<h1>Random OTP</h1>
//                <pre>This is a Random OTP ${otp} </pre>`
//     }
//     sgMail.send(msg)
//     .then(info=>{
//         console.log(info);
//         res.status(200).send({msg: "otp sent successfully"})
//     })
//     .catch(err=>{
//         console.error(err);
//         res.status(400).send({msg: "otp not send please try again"})
//     })
// }





require('dotenv').config();
const { SENDGRID_API_KEY, SENDGRID_EMAIL } = process.env;
const sgMail = require('@sendgrid/mail');
const User = require('../models/User')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.emailOTPSend = async (req, res)=>{ 
    if (!req.query.email){
        return res.status(400).send({msg:'You need to send email'});
    }
    let user = await User.findOne({email: req.query.email});
    if (!user) {
        return res.status(400).send({msg:'User does not exists'});
    }
    const otp = Math.floor(100000 + Math.random()*900000);
    const msg = {
        to: req.query.email,
        from : process.env.SENDGRID_EMAIL,
        subject : "six digit Random OTP",
        text: "Random OTP",
        html: `<h1>Random OTP</h1>
               <pre>This is a Random OTP ${otp} </pre>`
     }
    sgMail.send(msg)
    .then(info=>{
        user.emailOTP = otp;
        user.save()
        .then(u=>{
            return res.status(200).send({msg: "otp sent successfully"});
        })
    })
    .catch(err=>{
        console.error(err);
        return res.status(400).send({msg: "otp not send please try again"});
    })
}

// exports.emailOTPVerify = async (req, res)=>{ 
//     if (!req.query.email ||
//         !req.query.otp){
//         return res.status(400).send({msg:'You need to send email and OTP'});
//     }
//     let user = await User.findOne({email: req.query.email});
//     if (! user) {
//         return res.status(400).send({msg:'User does not exists'});
//     }
//    if (user.emailOTP == req.query.otp){
//        user.isEmailVerified = true;
//        user.save()
//          .then(u=>{
//          return res.status(200).send({msg: "Email verified successfully"});
//        })
//        .catch(err=>{
//         console.error(err);
//         return res.status(400).send({msg: err.message});
//        })
//    }
// }
