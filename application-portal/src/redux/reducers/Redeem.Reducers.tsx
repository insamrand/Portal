import Actions from "../actions/redeem.Actions";
import initialState from "../dtos/Redeem.DTO";

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.Types.REDEEM:
        return { ...state, redeemCode: {redeemCode: payload} }

    default:
        return state
    }
}
