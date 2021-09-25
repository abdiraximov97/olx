const nodemailer = require("nodemailer");

module.exports.email = async function email(to, subject, mail_body, mail_html) {
    const transport = await nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "shaxbozabdiraximov@yandex.com",
            pass: "shaxboz_yandex",
        }
        
    });

    return await transport.sendMail({
        from: '"Assalomu alaykum" <shaxbozabdiraximov@yandex.com>',
        to, 
        subject,
        text: mail_body,
        html: mail_html
    })
};

const transporter = nodemailer.createTransport(
    {
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "abdiraximov.shaxboz97@mail.ru",
            pass: "79zobxash",
        },
    },
    {
        from: "Shaxboz Abdiraximov <abdiraximov.shaxboz97@mail.ru>"
    }
);

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) {
            return console.log(err);
        }
        console.log("Email send", info);
    })
};

module.exports = mailer;