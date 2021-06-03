import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = entered => {
    const expensesData = {
      id: Math.random().toString(),
      ...entered,
    };
    props.onAddExpense(expensesData);
    setShowForm(false);
  };

  const newExpense = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={newExpense}>Add new expense</button>
      ) : (
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={closeForm} />
      )}
    </div>
  );
};

export default NewExpense;
