import ACTIONS from "../actions";

const initialState = {
    age: 26,
}

const reducer2 = (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.UPDATE_AGE :
            return {
                age: action.payload.value
            }
    }
    return state;
}

export default reducer2;