import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm=()=>{
    const [enteredTitle,updateEnteredTitle]=useState('')
    const [enteredAmount,updateEnteredAmount]=useState('')
    const [enteredDate,updateEnteredDate]=useState('')
    const titleChangeHandler=(e)=>{
        updateEnteredTitle(e.target.value)
        console.log(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        updateEnteredAmount(e.target.value)
        console.log(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        updateEnteredDate(e.target.value)
        console.log(e.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm