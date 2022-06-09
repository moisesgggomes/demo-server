const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("pages/index");
});
app.listen(0);