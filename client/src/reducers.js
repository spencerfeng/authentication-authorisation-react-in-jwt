export const cUser = (state, action) => {

    switch (action.type) {
        case 'SET_USER': 
            return Object.assign({}, action.data, {});
        default:
            return state || {};
    }

}

export const memberNews = (state, action) => {

    switch (action.type) {
        case 'SET_MEMBER_NEWS': 
            return action.data;
        default: 
            return state || [];
    }

}