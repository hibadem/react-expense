import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");

  const filterExpenses = props.expenses.filter((item) => item.date.getFullYear().toString() === filterValue);

  return (
    <>
      <ExpensesFilter selected={filterValue} setFilterValue={setFilterValue} />
      <Card className="expenses">
        <ExpensesList items={filterExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
