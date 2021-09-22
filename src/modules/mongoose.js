const mongoose = require("mongoose");
const users = require("../models/userModel");

async function mongo() {
    try {
        await mongoose.connect(process.env.MONGO_URL);


    } catch (error) {
        console.error("MONGOERROR: ", error);
    }
}

module.exports = mongo;