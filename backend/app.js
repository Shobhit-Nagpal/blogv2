const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

const indexRouter = require("./routes/index.js");

const PORT = 4000;

app.use("/", indexRouter);

app.use(express.json())

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})
