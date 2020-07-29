import database from '../firebase/firebase';

const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
};

const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expenses = {
            description, note, amount, createdAt
        }
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses`).push(expenses).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenses
            }));
        });
    }
}

const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    }
}

const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            });
    }
}

export const setExpense = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpense(expenses));
            });
    };
}

export { addExpense, removeExpense, editExpense, startAddExpense };