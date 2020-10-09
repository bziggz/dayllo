export default function lists(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const updatedBoard = action.payload.board;
      const otherLists = state.filter(
        (list) => list.board_id !== updatedBoard.id
      );
      const { lists } = updatedBoard;
      return [...otherLists, ...lists];
    case 'CREATE_LIST_SUCCESS':
      return [...state, action.payload.list];
    default:
      return state;
  }
}
