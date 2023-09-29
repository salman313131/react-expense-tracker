import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'
function App() {
  const [expenseitemList,setExpenseItem]=useState([])
  const addExpenseHandler=(expense)=>{
    setExpenseItem((prevExpense)=>{
      return [expense,...prevExpense]})
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseItem items={expenseitemList}></ExpenseItem>
    </div>
  );
}

export default App;
