import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should edit an expense with different values', () => {
    const action = editExpense('abc123', { description: 'testedit' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'testedit'
        }
    })
})

test('should add a new expense object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: '',
        amount: 120,
        createdAt: 1000
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

})

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})