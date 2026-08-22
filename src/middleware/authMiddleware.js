module.exports = (requiredRole) => {

    return (req, res, next) => {

        // Not logged in
        if (!req.session.userId) {
            return res.redirect("/login");
        }

        // Logged in, but wrong role
        if (req.session.role !== requiredRole) {

            if (req.session.role === "student") {
                return res.redirect("/student");
            }

            if (req.session.role === "company") {
                return res.redirect("/company");
            }
        }

        // Correct role
        next();
    };
};