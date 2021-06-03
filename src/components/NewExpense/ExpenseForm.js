import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangehandler = e => {
    setEnteredTitle(e.target.value);
  };
  const amountChangehandler = e => {
    setEnteredAmount(e.target.value);
  };
  const dateChangehandler = e => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expensesData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangehandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangehandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangehandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
