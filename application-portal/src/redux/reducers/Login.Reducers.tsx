import Actions from "../actions/Login.Actions";
import initialState from "../dtos/Login.DTO";

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case Actions.Types.LOGIN:
        return {...state, user: {
            ...state.user,email:payload.email,password:payload.password}}
    default:
        return state
    }
}
