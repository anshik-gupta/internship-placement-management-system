module.exports = (req, res, next)=>{
    req.session.destroy((err)=>{
        if (err) {
            console.error("Error during logout:", err);
            return res.status(500).send("Unable to logout");
        }

        res.redirect("/login");
    });
};