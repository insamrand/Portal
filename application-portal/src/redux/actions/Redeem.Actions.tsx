const Types = {
    REDEEM: "REDEEM"
  };
  
  const REDEEM = (code) => {
    return {
      type: Types.REDEEM,
      payload: code
    };
  };
  
  export default {
    Types,
    REDEEM
  };
  