const defaultState = {
  id: null,
  name: null,
  mp3: null
};

export default function(state = defaultState, action: any) {
  if (action.type === "TO_VOICE") {
    return {
      id: action.payload.id,
      name: action.payload.name,
      mp3: action.payload.mp3
    };
  }
  //   Not used right now
  if (action.type === "GET_RECORD") {
    return {
      id: action.payload.id,
      name: action.payload.name,
      mp3: action.payload.mp3
    };
  }
  return state;
}
