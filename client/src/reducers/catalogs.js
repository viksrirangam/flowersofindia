const initialState = {
    completed: true    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ASYNC_GET_CATELOGS':
            return Object.assign({}, state, {
                completed: action.completed,
                catalogs: action.payload
              });
        default:
            return state;
    }
};