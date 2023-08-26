const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.URL

const connectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo")
};


module.exports = connectToMongo;