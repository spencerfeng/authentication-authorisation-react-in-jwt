export const cUser = (state, action) => {

    switch (action.type) {
        case 'SET_USER': 
            return Object.assign({}, action.data, {});
        default:
            return state || {};
    }

}