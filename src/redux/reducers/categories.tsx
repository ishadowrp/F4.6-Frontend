type Action = {
    type: string;
    payload: Array<object>;
};

const initialState = [{}];

function categories(state:Array<object> = initialState, action: Action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.payload
            break;
        default:
            return state;
    }
    return state;
}

export default categories;