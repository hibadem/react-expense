import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

import React from "react";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;