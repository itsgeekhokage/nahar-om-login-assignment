import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectDb from "./db/connectDB.js";
import auth from "./routes/authRoute.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


connectDb(DATABASE_URL);

app.use(express.json());
app.use(cors());


app.use("/auth", auth);


app.listen(PORT, ()=>{
    console.log(`server listening`);
})
