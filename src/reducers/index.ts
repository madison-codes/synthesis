const defaultState = {
  text: ""
};

export default function(state = defaultState, action: any) {
  if (action.type === "TO_VOICE") {
    return {
      text: action.payload
    };
  }
  if (action.type === "INIT_ENCRYPT") {
    return {
      user: action.payload
    };
  }
  if (action.type === "GET_PII") {
    return {};
  }
  return state;
}
