type Action = {
    type: string;
    payload: Array<object>;
};

const initialState = [{}];

function recipes(state: Array<object> = initialState, action: Action) {
    switch (action.type) {
        case 'GET_RECIPES':
            return action.payload
            break;
        default:
            return state;
    }
    return state;
}

export default recipes;