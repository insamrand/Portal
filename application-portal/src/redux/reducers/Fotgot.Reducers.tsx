import Actions from "../actions/Forgot.Action";
import initialState from "../dtos/Forgot.DTO";

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.Types.FORGOT:
        return { ...state,
                email: {email:payload}
                 }

    default:
        return state
    }
}
