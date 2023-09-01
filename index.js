const express = require("express");
const path = require("path"); // Add this line
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const cors = require('cors');
const {ecommerceRoute} = require("./routes/ecommerceRoute");
const jwt = require('jsonwebtoken');

//handle cors for local work please remove on deployment
app.use(cors(
    corsOptions = {
        origin: 'http://localhost:3000', // Change to your React app's origin 
        credentials: true,
    }
));
app.use("/api/v1/", ecommerceRoute);


//create my server
dotenv.config({ path: "config.env" })
let PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Your App Works on PORT ${PORT}`);
})

 
//connect to DB
let MONGOL = process.env.MONGO_URL
mongoose.connect(MONGOL).then(() => {
    console.log("Database Connection Successful");
}).catch((err) => {
    console.log("database connection failed " + err);
})
