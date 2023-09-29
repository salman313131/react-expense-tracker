import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react';
function ExpenseItem(props){
    const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    return (
    <div className='main-expense-item'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {props.items.map(expense=> (
            <div key={expense.id} className='expense-item'>
                    <ExpenseDate date={expense.date}></ExpenseDate>
                    <ExpenseDetail title={expense.title} amount={expense.amount}></ExpenseDetail>
                    </div>
            )
            )}
    </div>
    );
}
export default ExpenseItem