const nodemailer = require("nodemailer");


module.exports.email = async function email(to, subject, mail_body, mail_html) {
    const transport = await nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "abdiraximov.shaxboz97@mail.ru",
            pass: "79zobxash",
        }
        
    });

    return await transport.sendMail({
        from: '"Assalomu alaykum" <abdiraximov.shaxboz97@mail.ru>',
        to, 
        subject,
        text: mail_body,
        html: mail_html
    });
};


