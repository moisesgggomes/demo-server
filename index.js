const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/pages/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port} http://localhost:${port}`));