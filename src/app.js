import express from "express";
import bodyParser from "body-parser";
import sendEmail from "./controllers/sendEmail.js";

const router = express.Router();


const app = express();

router.get('/', (req, res)=>{
    res.send("Welcome to Project eve mailer");
});
router.get('/email', sendEmail);

app.use('/', router)

const port = 8000;

app.listen(port, ()=>{
    console.log(`Listening to port ${port} . . .`);
})
