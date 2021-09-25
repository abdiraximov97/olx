
const Joi = require("joi");

module.exports = class Validation {
    static async SignUpValidation(data) {
        return await Joi.object({
            name: Joi.string().required().min(4).max(32).trim().error(new Error("Name is Invalid")),
            email: Joi.string().email().lowercase().required().trim().error(new Error("Email is Invalid")),
            password: Joi.string().min(4).required().error(new Error("Password is Invalid")),
        }).validateAsync(data);
    }
}