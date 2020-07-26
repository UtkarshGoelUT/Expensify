import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test("Testing removeExpense", () => {
    const action = removeExpense({ id: "323" });
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "323" });
});

test("Testing editExpense", () => {
    const action = editExpense("324", { note: "This is note", amount: 300 });
    expect(action).toEqual({ type: "EDIT_EXPENSE", id: "324", updates: { note: "This is note", amount: 300 } });
});

test("addExpenes test with values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
});

// test("addExpenes test with no values", () => {
//     const action = startAddExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     }
//     )
// });