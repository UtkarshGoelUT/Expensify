import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should note remove expense", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "6"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add expense", () => {
    const expense = {
        id: "109",
        description: "Laptop",
        note: "",
        createdAt: 0,
        amount: 200
    };
    const action = {
        type: "ADD_EXPENSE",
        expenses: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("Should edit expense", () => {
    const amount = 100
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(100);
});

test("Should not edit expense, when expense not found", () => {
    const amount = 100
    const action = {
        type: "EDIT_EXPENSE",
        id: "4",
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});