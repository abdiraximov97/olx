const homeRoute = require("./homeRoute")

module.exports = (app) => {
    app.use(homeRoute.path, homeRoute.router); 
}