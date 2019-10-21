const Types = {
    LOGIN: "LOGIN"
  };
  
  const Login = (user) => {
    return {
      type: Types.LOGIN,
      payload: user
    };
  };
  
  export default {
    Types,
    Login
  };
  