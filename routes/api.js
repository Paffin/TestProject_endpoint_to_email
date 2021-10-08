const {Router} = require('express')
const nodemailer = require("nodemailer");

const router = Router();

const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: 'name@gmail.com',
        pass: 'password',
    },
    secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});

router.post('/', (req, res) => {
    const postData = req.body
    const mailData = {
        from: 'name@gmail.com',
        to: 'name@gmail.com',
        subject: 'Send on Forms',
        text:JSON.stringify(postData),

    };
    console.log(mailData);
    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({
            message: "Mail send",
            message_id: info.messageId,
        });
    });
});

module.exports = router;
