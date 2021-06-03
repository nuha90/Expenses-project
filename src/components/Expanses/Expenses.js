import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
  const [years, setYear] = useState("2020");

  const filteredYear = selectedYear => {
    setYear(selectedYear);
  };

  const filterDate = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === years;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          item={years}
          onChangeFilter={filteredYear}
          expensesDate={props.items}
        />
        <ExpensesList filteredExpanses={filterDate} />
      </Card>
    </div>
  );
};

export default Expenses;
