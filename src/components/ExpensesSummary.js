import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenses, filters }) => {
    const visible = getVisibleExpenses(expenses, filters);
    if (visible.length > 1) {
        return <div>
            Viewing {visible.length} expenses : Totalling ₹{numeral(expensesTotal(visible) / 100).format('0,0.00')}
        </div>
    }
    else {
        return <div>
            Viewing {visible.length} expense : Totalling ₹{numeral(expensesTotal(visible) / 100).format('0,0.00')}
        </div>
    }
};

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpensesSummary);