import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import SelectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
