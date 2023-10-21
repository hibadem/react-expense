import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     title: e.target.value
    //   }
    // });
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     amount: e.target.value
    //   }
    // });
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     date: new Date(e.target.value)
    //   }
    // });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')

  }
  return (
    <form onSubmit={handleSubmitForm}>
      <div className='new-expense__controls'>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate}  min="2019-01-01" max="2024-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
