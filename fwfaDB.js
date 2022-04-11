const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ggbuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

const fwfa = mongoose.connection

fwfa.on('connected' , () => {
    console.log('MongoDb connection sucessfull');
})

fwfa.on ('error' , () => {
    console.log('MongoDb connection Failed');
})

module.exports = mongoose;