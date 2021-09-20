import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = function (props) {
  const onSaveExpenseHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
