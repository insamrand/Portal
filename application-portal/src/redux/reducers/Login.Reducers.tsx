const initialState = {
  items: [{ title: "a" }, { title: "b" }, { title: "c" }, { title: "d" }]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
