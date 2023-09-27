import ExpenseItem from './components/Expenses/ExpenseItem'
function App() {
  const locationOfExpenditure = 'Mumbai'
  const expenseitemList=[]
  for(let i=0;i<5;i++){
    expenseitemList.push(<ExpenseItem locationOfExpenditure={locationOfExpenditure} date={new Date()}></ExpenseItem>)
  }
  return (
    <div>
      <h1>Let's get started</h1>
      {expenseitemList}
    </div>
  );
}

export default App;
