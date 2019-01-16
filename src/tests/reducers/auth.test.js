import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOG_IN',
        uid: 'abc123'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = { type: 'LOG_OUT' }
    const state = authReducer({ uid: 'anything' }, action)
    expect(state).toEqual({});
});