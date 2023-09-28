import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const locationOfExpenditure = 'Mumbai'
  const expenseitemList=[]
  for(let i=0;i<5;i++){
    expenseitemList.push(<ExpenseItem id={i} locationOfExpenditure={locationOfExpenditure} date={new Date()}></ExpenseItem>)
  }
  const addExpenseHandler=(expense)=>{
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {expenseitemList}
    </div>
  );
}

export default App;
