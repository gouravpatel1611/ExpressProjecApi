import express from 'express';
import router from './routes/productRoutes.js';
import connectDb from './db/connectDb.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || '3000';
const uri = process.env.DATABASE_URL

//Set Routes
app.use("/api/products",router);


//Connect Database 
connectDb(uri);


app.listen(port, ()=>{
    console.log(`The project run in http://localhost:${port}`);
})