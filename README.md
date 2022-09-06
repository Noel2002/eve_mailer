# EVE MAILER
This is a server application that send mails on the Gmail clients using nodemailer services. It is basically designed to be used to upload the weekly data from an IoT pot. The data basically includes water level and luminosity.

## Routes
**/email/?email=$email&luminosity=$luminosity&water=$water**: the route for sending the email. The route requires three query parameters, namely:
 - email: the email of the receiver
 - luminosity: the numerical value of lumonosity reading 
 - water: numerical reading of water level of the pot

## Environment variables
**GMAIL_EMAIL**
The email of the sender/company

**GMAIL_PASS**
the pasword of the email

**CLIENT_ID**
The client ID of from google apis

**CLIENT_SECRET**
The screte key from google apis

**REFRESH_TOKEN**
The refresh token from google's developers playground

ATENTION: this is an alternation in OAUTH2 is problematic. we can also use SendGrid services

**SEND_GRID_API_KEY**
The api key from sendgrid
