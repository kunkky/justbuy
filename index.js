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
        origin: ['http://localhost:3000',"https://justbuy.onrender.com"], // Change to your React app's origin 
        credentials: true,
    }
));
app.use("/api/v1/", ecommerceRoute);

//serve the front end
app.use(express.static(path.join(__dirname, "./frontend/build")))
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

//create my server
dotenv.config()
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
