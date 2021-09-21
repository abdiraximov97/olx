const { HomeGetController } = require("../controllers/homeRouteController");

const router = require("express").Router();

router.get("/", HomeGetController);

module.exports = {
    path: "/",
    router,
}