





store.subscribe(() => {
    const state = store.getState();
    const filtered = getVisibleExpenses(state.expenses, state.filters);
    console.log(filtered);
});

const fisrtExpense = store.dispatch(addExpense({ description: "Rent", amount: 100, note: "Money for rent", createdAt: 1000 }));
const secondExpense = store.dispatch(addExpense({ description: "Coffee", amount: 300, note: "Money for rent", createdAt: -1000 }));
// store.dispatch(removeExpense({ id: fisrtExpense.expenses.id }));
// store.dispatch(editExpense(secondExpense.expenses.id, { amount: 100 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [
        {
            id: 1,
            amount: 531,
            description: 'Rent',
            note: 'Last month rent',
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}