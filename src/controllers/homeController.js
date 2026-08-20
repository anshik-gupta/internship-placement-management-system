const path = require("path");

module.exports = (req, res, next) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "../views")
    });
};