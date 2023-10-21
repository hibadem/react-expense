import React from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css';

export const NewExpense = (props) => {
  const handleSaveExpenseData = (expenseFormData) => {
    const newExpenseData = {
      ...expenseFormData,
      id: Math.random().toString()
    }
    console.log(newExpenseData);
    props.onAddExpenseData(newExpenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/> 
    </div>
  )
}
