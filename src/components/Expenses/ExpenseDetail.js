import { useState } from "react"
function ExpenseDetail(props){
    const [amount,setAmount] = useState(32)
    const amountHandler=()=>{
        setAmount(100)
    }
    return(
    <div className='expense-item__description'>
            <h2>Car Insaurance {props.locationOfExpenditure}</h2>
            <div className='expense-item__price'>${amount}</div>
            <button onClick={amountHandler}>Change Value</button>
    </div>)
}
export default ExpenseDetail