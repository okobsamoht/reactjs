const initialState = {
    sharedState: null,
};

function rootReducer(state = initialState, action) {
    if (!state) {
        return null;
    }
    //console.log(action);
    switch (action.type) {
        case "DO_SOMETHING": {
            console.log("state : ", { ...state });
            console.log(state);
            console.log(action);
            return {...state, something: action.payload};
        }
        case "SETSTATE": {
            return {...state, [action.key]: action.payload};
        }
        default:
            return state;
    }
}

export default rootReducer;
