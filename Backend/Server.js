import express from "express";;;
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from"cors";
import userRoute from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middlewares/errorMiddleware.js";
import productRoute from "./routes/ProductRoutes.js";


dotenv.config()


const app = express();

connectDB()

let port = process.env.PORT;

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extemded:true}));
app.use(cors());


app.use("/api/user",userRoute);
app.use('/api/product',productRoute)


app.use(notFound)
app.use(errorHandler)





app.listen(port, () => console.log("server started"));