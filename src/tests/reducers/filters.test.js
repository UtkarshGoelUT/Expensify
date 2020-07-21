import filterReducer from '../../reducers/filters';
import moment from 'moment';

test("Should set up default values", () => {
    const state = filterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("Should sort by amount", () => {
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toEqual('amount');
});

test("Should sort by date", () => {
    const state = filterReducer({
        sortBy: "amount",
        text: "",
        statrDate: undefined,
        endDate: undefined
    }, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toEqual('date');
});

test("Should set text filter", () => {
    const state = filterReducer(undefined, { type: "SET_TEXT", text: "TEST" });
    expect(state.text).toEqual('TEST');
});

test("Should set start date", () => {
    const state = filterReducer(undefined, { type: "SET_START_DATE", date: moment(100) });
    expect(state.startDate).toEqual(moment(100));
});

test("Should set end date", () => {
    const state = filterReducer(undefined, { type: "SET_END_DATE", date: moment(100) });
    expect(state.endDate).toEqual(moment(100));
});