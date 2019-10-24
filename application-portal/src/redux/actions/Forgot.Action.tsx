const Types = {
  FORGOT: "FORGOT"
};

const Forgot = email => {
  return {
    type: Types.FORGOT,
    payload: email
  };
};

export default {
  Types,
  Forgot
};
