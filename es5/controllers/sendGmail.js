// import nodemailer from "nodemailer";
// import getEmailTemplate from "../utils/getEmailTemplate.js";

var nodemailer  = require("nodemailer");
var getEmailTemplate = require("../utils/getEmailTemplate");


function sendGmail(req, res){
    var email = req.query.email;
    var luminosity = req.query.luminosity;
    var water = req.query.water;
    var transporter = nodemailer.createTransport({
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
        
        var mailConfigurations = {
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

module.exports = sendGmail;


