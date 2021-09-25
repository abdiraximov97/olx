const users = require("../models/userModel");
const { generateHash } = require("../modules/bcrypt");
const { SignUpValidation } = require("../modules/validation");
const {email: sendEmail} = require("../modules/email");
const mailer = require("../modules/email");

module.exports = class UserRouteController {
    static async UserRegistrationGetController(req, res) {
        res.render("signup");
    };
    static async UserLoginGetController(req, res) {
        res.render("login");
    };
    static async UserSignUpPostController(req, res) {
        // try {
        //     const {name, email, password} = await SignUpValidation(req.body);

        //     const user  =  await users.create({
        //         name, 
        //         email, 
        //         password: await generateHash(password), 
        //     });


        //     await sendEmail(
        //             email, 
        //             "Iltimos pochtangizni tasdiqlang!", 
        //             `Pochtangizni tasdiqlash uchun link`,
        //             `<a href="http://localhost:8888/users/verify/${user._id}">Tasdiqlash</a>`
        //         );

        //     res.redirect("/login");

        //     console.log(user);

        // } catch (error) {
        //     console.log(error);
        //     res.render("signup", {
        //         error: error + "",
        //     });
        // }

        try {
            if(!req.body.email || !req.body.password) return res.sendStatus(400);
            const message = {
                to: req.body.email,
                subject: "Tabriklaymiz! Siz saytingizda muvaffaqiyatli ro'yxatdan o'tdingiz",
                text: `Tabriklaymiz! Siz saytingizda muvaffaqiyatli ro'yxatdan o'tdingiz
                
                sizning shaxsiy ma'lumotlaringiz:
                login: ${req.body.email}
                password: ${req.body.password}
                
                shaxsiy malumotlaringizni hech kimga bermang`
            };
            mailer(message);
            const user = req.body;
            res.redirect("login");
        } catch (error) {
            console.error(error);
        }

    };

    static async UserVerifyGetController(req, res) {
        try {
            const id = req.params.id;

            if(!id) throw new Error("Tekshirish kodi xato!");

            const user = await users.findOne({
                _id: id,
            });

            console.log(user);
        } catch (error) {
            res.render("login", {
                error: error + "",
            })
        }
    }
}