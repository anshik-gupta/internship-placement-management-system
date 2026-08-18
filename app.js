const express = require("express");

const app= express();

app.get("/", (req, res, next)=>{
    res.send("app is working");
    console.log(req.method, req.url);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});