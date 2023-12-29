const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

require("dotenv").config();

const url = process.env.ATLAS_URL;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB database connection established successfully");
    })
    .catch((err) => console.error(err));

const codeData = require("./routes/codeData")
app.use('/', codeData)

app.get("/", (req, res) => {
    res.json("Hello Coder....");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});