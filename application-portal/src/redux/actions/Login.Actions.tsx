const Types = {
  LOGIN: "LOGIN",
  APP_READY: "APP_READY"
};

const appReady = () => {
  return {
    type: Types.APP_READY,
    payload: {}
  };
};

const Login = () => {
  return {
    type: Types.LOGIN,
    payload: {}
  };
};

export default {
  Types,
  appReady,
  Login
};
