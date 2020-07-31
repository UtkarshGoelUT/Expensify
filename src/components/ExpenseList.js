import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import SelectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ?
                    (<p className="list-item list-item__message">No expenses</p>) :
                    (props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />)))
            }
        </div>

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
