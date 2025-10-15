import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { isCredentialsAllowed, origins } from './config/app.config';
import { connectDB } from './config/db.config';

const app = express();
const PORT = process.env.PORT || 3500;
connectDB();

config();
app.use(
    cors({
        origin: (origin, callback) => {
            // If no origin is provided(eg Postman, etc) - allow the request
            if (!origin || origins.includes(origin)){
                return callback(null, true);
            }

            return callback(new Error('Not allowed by CORS'));
        },

        credentials: isCredentialsAllowed,
    })
);
app.use(express.json());
app.use(cookieParser());

// Register
app.use("/api/register", );

// Login
app.use("/api/auth",)


app.listen(PORT, () => { console.log(`Server running on ${PORT}`)});