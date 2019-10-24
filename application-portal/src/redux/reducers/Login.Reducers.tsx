import Actions from "../actions/Login.Actions";
import initialState from "../dtos/Login.DTO";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.Types.APP_READY:
      return { ...state, ...payload };

    case Actions.Types.LOGIN:
      return { ...state, ...payload };

    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
