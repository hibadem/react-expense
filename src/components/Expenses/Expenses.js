import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");

  return (
    <>
      <ExpensesFilter selected={filterValue} setFilterValue={setFilterValue} />
      <Card className="expenses">
        {props.expenses
          .filter((item) => item.date.getFullYear().toString() === filterValue)
          .map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            ></ExpenseItem>
          ))}
      </Card>
    </>
  );
}

export default Expenses;
