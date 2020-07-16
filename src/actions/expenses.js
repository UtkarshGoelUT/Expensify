import { v1 as uuid } from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(), // This is for generating unique id's
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

export { addExpense, removeExpense, editExpense };