export default function list(state = {}, action) {
  switch (action.type) {
    case "UPDATE_LIST_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
}
