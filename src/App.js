import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const locationOfExpenditure = 'Mumbai'
  const expenseitemList=[]
  for(let i=0;i<5;i++){
    expenseitemList.push(<ExpenseItem locationOfExpenditure={locationOfExpenditure} date={new Date()}></ExpenseItem>)
  }
  return (
    <div>
      <NewExpense></NewExpense>
      {expenseitemList}
    </div>
  );
}

export default App;
