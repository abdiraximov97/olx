
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const databaseMiddleware = require("./middlewares/databaseMiddleware");
const routes = require("./routes/routes");


const port = process.env.port || 8888;

async function server(mode) {

    const app = express();
    app.listen(port, () => {
        console.log(`server ${port} - portda yondi`);
    });
    
    try {
        // middlewares
        app.use(cookieParser());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.static(path.join(__dirname, "src", "public")));
        app.use(databaseMiddleware);

        app.use("/assets", express.static("assets"));

        if(mode == "DEV") {
            app.use(morgan("dev"));
        }
    
        // settings
        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "views"))
        
    } finally {
        routes(app);
    }
}

module.exports = server;

