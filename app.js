const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://localhost:27017/booklist');

const con = mongoose.connection;

con.on('open', () => {
    console.log('connected....');
})

app.use(express.json());
const booklistRouter = require('./routes/bookslists');

app.use('/bookslists', booklistRouter);

app.listen(8000, () => {
    console.log("Server Running");
});