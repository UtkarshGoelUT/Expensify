import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpense from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/add" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <PublicRoute path="*" component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
