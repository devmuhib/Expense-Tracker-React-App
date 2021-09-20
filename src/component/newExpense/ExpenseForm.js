import '../css/ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeTitleHandler = e => {
    setEnteredTitle(e.target.value);
  };
  const changeAmountHandler = e => {
    setEnteredAmount(e.target.value);
  };
  const changeDateHandler = e => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.saveExpenseData(expenseData);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <input
            type="number"
            min="0.01"
            value={enteredAmount}
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>

        <div className="new-expense__control">
          <input
            type="date"
            value={enteredDate}
            min="2019-1-1"
            max="2022-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
