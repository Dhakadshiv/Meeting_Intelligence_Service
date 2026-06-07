require('dotenv').config();
const app=require("./server/app")
const connectDB=require("./server/database/db")
const Port=process.env.PORT 

connectDB()
app.listen(Port,()=>{
    console.log("app is listning on port=",Port)
})