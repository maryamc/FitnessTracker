const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended:true}));
app(express.json());

app.use(express.static("public"));

//mongoose db connection
mongoose.connect(process.env.MONGODB_URI || {});

app.listen(PORT,() => {
    console.log('App running on port ${PORT}')
});