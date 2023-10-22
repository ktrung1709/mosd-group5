const nodemailer = require("nodemailer");
const {SMTP} = require("../configs/main.config");

export function sendEmail(from, to, subject, body) {
    let mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: body
    };

    let transporter = nodemailer.createTransport({
        host: SMTP.HOST,
        port: SMTP.PORT,
    });

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            throw err;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}