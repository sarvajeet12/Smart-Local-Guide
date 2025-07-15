require("dotenv").config({})
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db")

// Router
const poisRoute = require("./routes/pois");

const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
    origin: "http://localhost:5173",
    // origin: "https://hospital-mangement-system-app.onrender.com",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
};

app.use(cors(corsOption));
app.use(express.json());



// Router
app.use("/api/pois", poisRoute);


// Start Server
const startServer = async () => {
    await connectDB();

    app.listen(port, () => console.log("Server running on http://localhost:5000"));
}

startServer()

