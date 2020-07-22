import React from 'react';
import ExpenseList from './ExpenseList';
import ExpeneseListFilters from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpeneseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;