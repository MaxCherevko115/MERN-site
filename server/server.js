import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import api from "./routes/api.js";

import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());
app.use('/api', api);


mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}!!`)))
    .catch((err) => console.log(err.message))



