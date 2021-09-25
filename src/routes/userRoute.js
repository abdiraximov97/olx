
const { UserRegistrationGetController, UserLoginGetController, UserSignUpPostController, UserVerifyGetController } = require("../controllers/userRouteController");

const router = require("express").Router();

router.get("/login", UserLoginGetController);
router.get("/signup", UserRegistrationGetController);
router.get("verify/:id", UserVerifyGetController);
router.post("/signup", UserSignUpPostController);


module.exports = {
    path: "/users",
    router,
}