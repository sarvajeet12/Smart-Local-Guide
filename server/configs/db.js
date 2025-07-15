const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        mongoose.connect(process.env.DATABASE_URI, {
            dbName: "smart-guide"
        })

        console.log("Database connection successfully");

    } catch (error) {
        console.log("Database connection failed");
        process.exit(1);
    }
}

module.exports = connectDB;