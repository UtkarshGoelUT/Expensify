import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenses, filters }) => {
    const visible = getVisibleExpenses(expenses, filters);
    const d = visible.length > 1 ? "expenses" : "expense";
    return <div className="page-header">
        <div class="content-container">
            <h1 className="page-header__title">
                Viewing <span>{visible.length}</span> {d} : Totalling <span>₹{numeral(expensesTotal(visible) / 100).format('0,0.00')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/add">Add expense</Link>
            </div>
        </div>
    </div>
};

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpensesSummary);