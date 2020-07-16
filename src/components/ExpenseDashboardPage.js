import React from 'react';
import ExpenseList from './ExpenseList';
import ExpeneseListFilters from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpeneseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;