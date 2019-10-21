const Types = {
  APP_READY: "APP_READY"
};

const appReady = () => {
  return {
    type: Types.APP_READY,
    payload: {}
  };
};

export default {
  Types,
  appReady
};