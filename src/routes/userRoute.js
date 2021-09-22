const { HomeGetController } = require("../controllers/homeRouteController");
const { UserRegistrationGetController } = require("../controllers/userRouteController");

const router = require("express").Router();

router.get("/login", UserRegistrationGetController);
router.get("/registration", UserRegistrationGetController);

module.exports = {
    path: "/users",
    router,
}