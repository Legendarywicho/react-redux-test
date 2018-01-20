import constants from "../Constants"

const mathReducer = (state = {
    result : 1 ,
    lastValues : []
} , action) => {
    switch (action.type){
        case constants.add:
            state = {
                ...state,
                result : state.result + action.payload,
                lasValueArray : [...state.lastValues , action.payload]
            }
            break
        case constants.subtract:
            state = {
                ...state ,
                result : state.result + action.payload,
                lasValueArray : [...state.lastValues , action.payload]
            }
            break
    }
    return state;
};

export default mathReducer