import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm=(props)=>{
    const [enteredTitle,updateEnteredTitle]=useState('')
    const [enteredAmount,updateEnteredAmount]=useState('')
    const [enteredDate,updateEnteredDate]=useState('')
    // const [userInput,setUser] = useState({
    //     enteredTitle:'',enteredAmount:'',enteredDate=''
    // })
    const titleChangeHandler=(e)=>{
        updateEnteredTitle(e.target.value)
        // setUser((prevState=>{
        //     return {...prevState,enteredTitle:e.target.value}
        // }))
    }
    const amountChangeHandler=(e)=>{
        updateEnteredAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        updateEnteredDate(e.target.value)
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        const data={title:enteredTitle,amount:enteredAmount,date:new Date(enteredDate)}
        props.onSaveExpenseData(data)
        props.onCancel(0)
        updateEnteredTitle('')
        updateEnteredAmount('')
        updateEnteredDate('')
    }
    const cancelForm=()=>{
        props.onCancel(0)
    }
    return(
        <form onSubmit={formSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={cancelForm}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm