import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isShowForm, setIsShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
    }
    const showFormHandler = () => {
        setIsShowForm(true);
    }

    const stopShowFormHandler = () => {
        setIsShowForm(false);
    }

    return (
        <div className="new-expense">
            {!isShowForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {isShowForm && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopShowFormHandler}
            />}
        </div>
    );
}

export default NewExpense;