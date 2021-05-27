
const express = require('express');
const app = express ();

const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


//listen to server 
const port = 5000
app.listen(port, ()=> {
    console.log(`this server is running on ${port}`)
});


// Create  routes and middleleware

const logger = require('./middleware/logger')
app.use(logger)

app.use(express.static(__dirname +'/Public'))







