const { HomeGetController } = require("../controllers/homeRouteController");
const { UserRegistrationGetController } = require("../controllers/userRouteController");

const router = require("express").Router();

router.get("/", UserRegistrationGetController);

module.exports = {
    path: "/login",
    router,
}