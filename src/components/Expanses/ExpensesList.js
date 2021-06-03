import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
  if (props.filteredExpanses.length === 0) {
    return <h2 className="expenses-list__fallback">No expanses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpanses.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
