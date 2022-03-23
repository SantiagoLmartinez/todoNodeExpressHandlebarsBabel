import express from "express";
import {create} from "express-handlebars";
// import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path"
import morgan from "morgan";

const app = express()

app.set("views", path.join( __dirname + "views"));
// app.set("views", __dirname + '/views')

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs",
    create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
}).engine
);
app.set("view engine", ".hbs");

// middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));

// routes
app.use(indexRoutes)

export default app;
