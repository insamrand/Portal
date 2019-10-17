import Actions from "../actions/Home.Actions";

const initialState = {
  items: [
    {
      image: require("../../../assets/images/icon/snapchat.png"),
      title: "Snapchat"
    },
    {
      image: require("../../../assets/images/icon/snapchat.png"),
      title: "Snapchat"
    },
    {
      image: require("../../../assets/images/icon/snapchat.png"),
      title: "Snapchat"
    },
    {
      image: require("../../../assets/images/icon/snapchat.png"),
      title: "Snapchat"
    }
  ]
};

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
