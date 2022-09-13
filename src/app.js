import express from "express";
import bodyParser from "body-parser";
import sendEmail from "./controllers/sendEmail.js";
import sendGmail from "./controllers/sendGmail.js";

const router = express.Router();


const app = express();

router.get('/', (req, res)=>{
    res.send("Welcome to Project eve mailer");
});
router.get('/email', sendGmail);

app.use('/', router)

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Listening to port ${port} . . .`);
})
