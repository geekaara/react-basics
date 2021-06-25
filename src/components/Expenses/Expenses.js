import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");
  const getYear = (selectedYear) => {
    setEnteredYear(selectedYear);
    //console.log(selectedYear);
  };

  const filtered = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onSelectYear={getYear} />
        <ExpensesChart items={filtered} />
        <ExpensesList expenses={filtered} />
      </Card>
    </div>
  );
};
export default Expenses;
