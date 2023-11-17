import connectDb from "./db/connectDb.js";
import ProductModel from "./models/ProductModel.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./products.json");

import dotenv from 'dotenv'
dotenv.config();
const url = process.env.DATABASE_URL;

const start = async ()=>{
    try{
        await connectDb(url);
        await ProductModel.deleteMany();
        await ProductModel.create(data);
        console.log("success");
    }catch(err){
        console.log(err);
    }
}

start();