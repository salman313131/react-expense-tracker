import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
function ExpenseItem(props){
   const deletehandler = ()=>{
    
   }
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetail>
        <button onClick={deletehandler}>Delete</button>
    </div>
    );
}
export default ExpenseItem