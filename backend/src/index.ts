// pw=ZckeyFDhsRMmpC9Q
//IP address (175.157.55.212)
import express,{Express} from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from "./routes/financial-records"

const app: Express=express();
const port=process.env.PORT || 3001

app.use(express.json())

const mongoURI: string="mongodb+srv://collinsjanarthana:ZckeyFDhsRMmpC9Q@personalfinancetracker.i0bld.mongodb.net/"

mongoose
.connect(mongoURI)
.then(()=>console.log("Connected to MONGODB"))
.catch((err)=>console.error("Failed to connect MONGODB:",err))

app.use("/financial-records",financialRecordRouter)

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})