import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  

const sendEmail = (req, res)=>{
    const {email, luminosity, water}  = req.query
    const msg = {
      to: email,
      from: 'noelberwa@gmail.com', // Use the email address or domain you verified above
      subject: 'Cyborg Plant Weekly Updates',
      text: `Luminosity: ${luminosity} Water: ${water}`,
      html: `<table style="width:100%">
                <tr>
                  <th>Luminosity</th>
                  <th>Water</th>
                </tr>
                <tr>
                  <td>${luminosity}</td>
                  <td>${water}</td>
                </tr>
            </table>
    `,
    };

    sgMail
    .send(msg)
    .then(() => {
      res.send({message: "Email sent successfully!"})
    }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });    
    
}

export default sendEmail;