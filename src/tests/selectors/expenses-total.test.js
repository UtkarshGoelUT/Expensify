import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should retrun 0", () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test("Should correctly add up expense", () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test("Should add all amounts", () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(5790);
});