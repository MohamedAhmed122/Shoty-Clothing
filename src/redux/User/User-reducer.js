// reducer is just a function to get two props it gets a state object which present last state and
// action this action will have 2 props one for type and one or paylaod(update)

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
            default:
                return state;
    }
}

export default userReducer;