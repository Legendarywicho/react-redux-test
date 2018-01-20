import constants from "../Constants"
const userReducer = (state = {
    user : "Carl" ,
    age  : 22
} , action) => {
    switch (action.type){
        case constants.set_name:
            state = {
                ...state,
                user: action.payload
            }
            break
        case constants.set_age:
            state = {
                ...state ,
                age : action.payload
            }
            break
    }
    return state;
};
export default userReducer