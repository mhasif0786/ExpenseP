import './ExpenseAmount.css';
function ExpenseAmount(props){
    return (

    <div className='expense'>
                ${props.price}
      </div>
        
    );
}
export default ExpenseAmount;