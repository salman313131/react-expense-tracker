import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import { useState } from 'react'
function App() {
  const locationOfExpenditure = 'Mumbai'
  const expenseitemList=[]
  for(let i=0;i<5;i++){
    expenseitemList.push(<ExpenseItem id={i} locationOfExpenditure={locationOfExpenditure} date={new Date()}></ExpenseItem>)
  }
  const addExpenseHandler=(expense)=>{
    console.log(expense)
  }
  const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {expenseitemList}
    </div>
  );
}

export default App;
