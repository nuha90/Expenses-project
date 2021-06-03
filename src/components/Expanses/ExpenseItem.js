import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {};

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>change</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
