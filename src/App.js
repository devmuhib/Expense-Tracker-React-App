import React, { useState } from 'react';
import Expenses from './component/Expenses.js';
import NewExpense from './component/newExpense/NewExpense.js';

const DUMMY_EXPENSES = [
  {
    id: '01',
    title: 'Car Insurance',
    amount: 249.67,
    date: new Date(2020, 8, 13),
  },
  {
    id: '02',
    title: 'Bank Management',
    amount: 299.67,
    date: new Date(2021, 1, 25),
  },
  {
    id: '03',
    title: 'Life Insurance',
    amount: 209.67,
    date: new Date(2021, 5, 27),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
