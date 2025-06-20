import express from "express"
import {connectDB} from "./database/db.js"
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listining to port ${PORT}`);

})