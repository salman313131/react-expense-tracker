import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import AddExpense from './AddExpense'
import { useState } from 'react'
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {...enteredExpenseData,id: Math.random().toString()}
        props.onAddExpense(expenseData)
    }
    const [addExpenseFalg,setAddExpenseFlag]=useState(0)

    return(
        <div className='new-expense'>
            {addExpenseFalg===0 && <AddExpense onAdd={setAddExpenseFlag}></AddExpense>}
            {addExpenseFalg===1 && <ExpenseForm onCancel={setAddExpenseFlag} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}
export default NewExpense