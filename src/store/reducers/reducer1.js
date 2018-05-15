import ACTIONS from "../actions";

const initialState = {
    name: "Charlie"
}

const reducer1 = (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.UPDATE_NAME :
            return {
                name: action.payload.value
            }
    }

    return state;
}

export default reducer1;