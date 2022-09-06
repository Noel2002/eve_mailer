import nodemailer from "nodemailer";
import getEmailTemplate from "../utils/getEmailTemplate.js";
const sendGmail = (req, res)=>{
    const {email, luminosity, water}  = req.query;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
        });
        
        const mailConfigurations = {
            from: 'noelberwa@gmail.com',
            to: email,
            subject: 'Weekly Cyborg Plant Updates',
            html: getEmailTemplate({water, luminosity}),
        };
            
        transporter.sendMail(mailConfigurations, function(error, info){
            if (error) throw Error(error);
                console.log('Email Sent Successfully');
                res.send("Sucess!");
            console.log(info);
        });
}

export default sendGmail;


