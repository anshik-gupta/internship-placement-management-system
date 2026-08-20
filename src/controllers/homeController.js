const userModel = require("../models/userModel");

const homeController = (req, res, next) => {
    res.render("./homeview/home");
};

const loginController = (req, res, next) => {
    res.render("./homeview/login");
};

const getSignupController = (req, res, next) => {
    res.render("./homeview/signup");
};
    
const postSignupController = async(req, res, next) => {
    console.log(req.body);
    const { name, email, role, password, confirmPassword } = req.body;
    try {
        await userModel.register(name, email, role, password);
        res.redirect("/login");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(400).render("./homeview/signup");
    }
};

const postLoginController = async(req, res, next) => {
    console.log(req.body);
    const {email, password}= req.body;
    try {
        await userModel.login(email, password);
        res.redirect("/user");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(400).render("./homeview/login");
    }
};

module.exports = {
    homeController,
    loginController,
    getSignupController,
    postSignupController,
    postLoginController
};