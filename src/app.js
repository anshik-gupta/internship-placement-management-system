//core modules
const express = require("express");
const path = require("path");
const db = require("./config/db");

//user modules
const homeRouter = require("./routes/homeRouter");
const userRouter = require("./routes/userRouter");
const companyRouter = require("./routes/companyRouter");

const app= express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", homeRouter);

app.use("/user", userRouter);

app.use("/company", companyRouter)



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});