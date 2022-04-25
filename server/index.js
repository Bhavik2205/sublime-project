import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import getRoute from './routes/customers.js';
import './node_modules/dotenv/config.js';

const app = express();

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/data', getRoute)


//Port on which server is listening
app.listen(process.env.PORT);

//connecting to the Database
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('Server Started on', process.env.PORT)
);