const initialState = {
    articles: [],
    remoteArticles: [],
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
        case "ADD_ARTICLE": {
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        }
        case "DATA_LOADED": {
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload)
            });
        }
        default:
            return state;
    }
}

export default rootReducer;
