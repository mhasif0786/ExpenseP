import './ExpenseDetails.css'
import ExpenseAmount from './ExpenseAmount';
import ExpenseDate from './ExpenseDate';
function ExpenseDetail(props){
    return (
       <div className="expense-item">
            <ExpenseDate date={props.date}/> 
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div> 
            <ExpenseAmount price= {props.price}/> 
       </div>
    );
}
export default ExpenseDetail;