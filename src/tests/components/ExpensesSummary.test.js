import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')

}

test("Should render with 1 expense summary", () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} filters={filters} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render with expenses summary", () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} filters={filters} />);
    expect(wrapper).toMatchSnapshot();
});

