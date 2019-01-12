import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDasboardPage from '../../components/ExpensesDashboardPage';

test('should render ExpenseDahsboard page correctly', () => {
    const wrapper = shallow(<ExpenseDasboardPage />);
    expect(wrapper).toMatchSnapshot();
})