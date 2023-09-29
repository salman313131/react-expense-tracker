import './ExpenseForm.css'
const AddExpense=(props)=>{
    const clickHandler=()=>{
        props.onAdd(1)
    }
    return(
        <div className='new-expense__controls'>
            <div className='new-expense__actions'>
                <button onClick={clickHandler}>Add Expense</button>
            </div>
        </div>
    )
}
export default AddExpense