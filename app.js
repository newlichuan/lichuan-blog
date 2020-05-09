const express = require("express");
const app = express();
app.use(express.static("build"));
app.listen(9500, () => console.log("正在监听9500"));
