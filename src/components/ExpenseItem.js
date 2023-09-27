import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
function ExpenseItem(props){
   
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetail locationOfExpenditure={props.locationOfExpenditure}></ExpenseDetail>
    </div>
    );
}
export default ExpenseItem