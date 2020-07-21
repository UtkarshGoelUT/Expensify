import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("Testing removeExpense", () => {
    const action = removeExpense({ id: "323" });
    expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "323" });
});

test("Testing editExpense", () => {
    const action = editExpense("324", { note: "This is note", amount: 300 });
    expect(action).toEqual({ type: "EDIT_EXPENSE", id: "324", updates: { note: "This is note", amount: 300 } });
});

test("addExpenes test with values", () => {
    const action = addExpense({ description: "This is something", amount: 400, createdAt: 1000 });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expenses: { description: "This is something", amount: 400, createdAt: 1000, note: "", id: expect.any(String) }
    })
});

test("addExpenes test with values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expenses: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    }
    )
});