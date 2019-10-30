const initialState = {
    completed: true    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ASYNC_GET_CATELOG':
            return Object.assign({}, state, {
                completed: action.completed,
                plants: action.payload
              });
        default:
            return state;
    }
};