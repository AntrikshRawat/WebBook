/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const mongoURI = process.env.Mongo_DB_URI;

const connectToMongo = async ()=>{
try{
await mongoose.connect(mongoURI);
console.log("connected successfully!");
}catch(error) {
          console.log(error);
 }
}

module.exports = connectToMongo;