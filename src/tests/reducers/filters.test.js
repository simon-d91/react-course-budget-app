import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'e' };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('e');
});

test('should set startDate filter', () => {
    const action = { type: 'SET_START_DATE', startDate: 0 };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(0)
});

test('should set endDate filter', () => {
    const action = { type: 'SET_END_DATE', endDate: 0 };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(0)
});
