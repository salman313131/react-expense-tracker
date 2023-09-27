import ExpenseItem from './components/ExpenseItem'
function App() {
  const locationOfExpenditure = 'Mumbai'
  const expenseitemList=[]
  for(let i=0;i<100;i++){
    expenseitemList.push(<ExpenseItem locationOfExpenditure={locationOfExpenditure}></ExpenseItem>)
  }
  return (
    <div>
      <h1>Let's get started</h1>
      {expenseitemList}
    </div>
  );
}

export default App;
