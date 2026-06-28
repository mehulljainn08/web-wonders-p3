const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({
        message: "Welcome to Web Wonders 🚀"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});