import "./ExpenseDate.css";
const ExpenseDate = props => {
  return (
    <div className="expense-date ">
      <div className="expense-date__month">
        {props.date.toLocaleDateString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {props.date.toLocaleDateString("en-US", { year: "numeric" })}
      </div>
      <div className="expense-date__day">
        {props.date.toLocaleDateString("en-US", { day: "numeric" })}
      </div>
    </div>
  );
};
export default ExpenseDate;
