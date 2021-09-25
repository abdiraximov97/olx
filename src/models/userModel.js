const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        max: [32, "Iltimos ismingiz 32 ta belgidan oshmasin"],
        min: [4, "iltimos ismingiz 4 ta belgidan kam bo'lmasin"],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const users = mongoose.model("users", userSchema);

module.exports = users;