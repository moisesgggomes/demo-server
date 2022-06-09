const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("pages/index");
});
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is running on ${port} http://localhost:${port}`));