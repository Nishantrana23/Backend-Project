const mongoose = require("mongoose")

const connectDatabase = async () => {


    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB connected Successfully")

}

module.exports = connectDatabase
