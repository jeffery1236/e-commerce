export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user,
})

// An action is simply a wrapper around a payload