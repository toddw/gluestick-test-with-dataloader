type State = Array<String>;

const INITIAL_STATE: State = [];

export default (state: State = INITIAL_STATE, action: { type: string, payload?: any }) => {
  switch (action.type) {
    case "LOAD_TODOS": {
      return Object.keys(action.payload.data.message);
    }
    default:
      return state;
  }
};
