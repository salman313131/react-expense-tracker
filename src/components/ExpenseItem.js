import './ExpenseItem.css'
function ExpenseItem(props){
    return (
    <div className='expense-item'>
        <div>March 21st</div>
        <div className='expense-item__description'>
            <h2>Car Insaurance {props.locationOfExpenditure}</h2>
            <div className='expense-item__price'>$32</div>
        </div>
    </div>
    );
}
export default ExpenseItem