import sgMail from "@sendgrid/mail";
  sgMail.setApiKey("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");
  

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