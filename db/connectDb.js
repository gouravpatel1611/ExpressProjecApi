import mongoose  from "mongoose";


const connectDb = async (DATABASE_URL)=>{
    try{
        const DB_OPTION  = {
            dbName : "ProjectApi"
        }
        const db = await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("Connect Successfully .............!");
    }catch(err){
        console.log(err);
    }
}

export default connectDb;