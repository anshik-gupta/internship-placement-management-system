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
    
const postSignupController = (req, res, next) => {

    console.log(req.body);

    const { name, email, role, password, confirmPassword } = req.body;

    userModel.register(name, email, role, password)
        .then(() => {
            res.redirect("/login");
        })
        .catch((error) => {
            console.error("Error during signup:", error);
            res.status(400).render("./homeview/signup");
        });
};

const postLoginController = (req, res, next) => {

    console.log(req.body);

    const { email, password } = req.body;

    userModel.login(email, password)
        .then((user) => {

            req.session.userId = user.id;
            req.session.role = user.role;

            if(user.role==='user'){
                res.redirect("/user");
            }else{
                res.redirect("/company")
            }
        })
        .catch((error) => {
            console.error("Error during login:", error);
            res.status(400).render("./homeview/login");
        }
    );
};

module.exports = {
    homeController,
    loginController,
    getSignupController,
    postSignupController,
    postLoginController
};