const mongoose=require("mongoose");

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("server is connected to Hintro database");
}

module.exports=connectDB
