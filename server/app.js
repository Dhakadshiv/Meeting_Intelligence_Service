const express=require('express');
const cors=require("cors")

const app=express();
app.use(cors())
const cookiParser=require("cookie-parser") 
const swagger=require("./swagger")
require("dotenv").config();
require("./EmailService/email")

const MeetingRouter=require("./routes/MeetingRoute")
const MeetingAnalysisRouter=require("./routes/MeetingAnalysisRoute");
const ActionRoute=require("./routes/ActionItemRoute")
const Authroute=require("./routes/AuthRoute");
const traceMiddleware =require("./middleware/traceMiddleware")
const EvaluationRoute =require("./routes/evaluation")

app.use(traceMiddleware);
app.use(express.json());
app.use(cookiParser())
app.use("/api-docs",swagger)

app.use("/api",EvaluationRoute)
app.use("/",EvaluationRoute)

app.get("/",(re, res)=>{
    res.send("Welcome to the Meeting Management API")
})



app.use("/api",MeetingRouter,MeetingAnalysisRouter,ActionRoute,)
app.use("/auth",Authroute)

module.exports=app