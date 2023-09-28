function ExpenseDetail(props){
    return(
    <div className='expense-item__description'>
            <h2>Car Insaurance {props.locationOfExpenditure}</h2>
            <div className='expense-item__price'>$32</div>
    </div>)
}
export default ExpenseDetail