//core modules
const express = require("express");
const path = require("path");
const db = require("./config/db");
const session = require("express-session");

//student modules
const homeRouter = require("./routes/homeRouter");
const studentRouter = require("./routes/studentRouter");
const companyRouter = require("./routes/companyRouter");
const logoutRouter = require("./routes/logoutRouter");

const app= express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: "internship-secret",
    resave: false,
    saveUninitialized: false
}));

app.use("/", homeRouter);

app.use("/student", studentRouter);

app.use("/company", companyRouter)

app.use("/logout", logoutRouter);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});