const Types = {
  LOGIN: "LOGIN",
  APP_READY: "APP_READY",
  SET_EMAIL: "SET_EMAIL",
  SET_PASS: "SET_PASS"
};

const appReady = () => {
  return {
    type: Types.APP_READY,
    payload: {}
  };
};

const Login = (users: any) => {
  return {
    type: Types.LOGIN,
    payload: users
  };
};
const setEmail = (email: any) => {
  return {
    type: Types.SET_EMAIL,
    payload: email
  };
};

const setPass = (password: any) => {
  return {
    type: Types.SET_PASS,
    payload: password
  };
};

export default {
  Types,
  appReady,
  Login,
  setEmail,
  setPass
};
