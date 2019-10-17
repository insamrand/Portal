import Actions from "../actions/Home.Actions";
import initialState from "../dtos/Home.DTO";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.Types.APP_READY:
      console.log("Action APP Ready Working ..");
      return { ...state, ...payload };

    case "typeName":
      return { ...state, ...payload };

    default:
      return state;
  }
};
