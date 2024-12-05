import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financialRecordForm"
import { FinancialRecordList } from "./financialRecordList"
export const Dashboard =()=>{
    const{user} =useUser()
    return <div className="dashboard-container">
        <h1>Welcome {user?.firstName}! Here are youe Finances:</h1>
        <FinancialRecordForm/>
        <FinancialRecordList/>
    </div>
}