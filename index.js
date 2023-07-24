import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
const URL = "mongodb + srv://Memories:hellbound10@cluster0.d3ekvmd.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());


app.use('/', router);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err.message))

