import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
  const [userInput, setUserInput] = useState('');
  
  const titleChangeHandler = (e) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        title: e.target.value
      }
    });
  }
  const amountChangeHandler = (e) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        amount: e.target.value
      }
    });
  }
  const dateChangeHandler = (e) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        date: e.target.value
      }
    });
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
