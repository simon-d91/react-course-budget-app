import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set defult state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
});

test('should remove expense by entered id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '104',
        description: 'Chicken',
        note: '',
        amount: 1952,
        createdAt: 2000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense with found id', () => {
    const description = 'GUM2'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit an expense if id not found', () => {
    const description = 'GUM2'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});