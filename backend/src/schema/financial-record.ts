import mongoose, { DateSchemaDefinition } from "mongoose";

interface FinancialRecord{
    userId:string
    date: Date
    description:string
    amount:number
    category:string
    paymentMethod:string
}

//schema(fields)
const financialRecordSchema=new mongoose.Schema<FinancialRecord>({
    userId:{type: String, required:true},
    date:{type: Date, required:true},
    description:{type: String, required:true},
    amount:{type: Number, required:true},
    category:{type: String, required:true},
    paymentMethod:{type: String, required:true},
    
})

//model
const FinancialRecordModel=mongoose.model<FinancialRecord>( //passing FinancialRecord interface created in tsx
    "FinancialRecord", //table name
    financialRecordSchema //passing schema
)

export default FinancialRecordModel;