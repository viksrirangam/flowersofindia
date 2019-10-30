const initialState = {
    completed: true    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ASYNC_GET_PLANT':
            return Object.assign({}, state, {
                completed: action.completed,
                plant: action.payload
              });
        default:
            return state;
    }
};