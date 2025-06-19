const express = require("express");
const { connectDB } = require("./database/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is listining to port ${PORT}`);
    
})