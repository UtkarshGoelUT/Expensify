import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test("Test setStartDate", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test("Test setStartDate", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test("Test setText with args", () => {
    const action = setTextFilter("bill");
    expect(action).toEqual({ type: "SET_TEXT", text: "bill" });
});

test("Test setText without args", () => {
    const action = setTextFilter();
    expect(action).toEqual({ type: "SET_TEXT", text: "" });
});

test("Test sortByAmount", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("Test sortByDate", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});