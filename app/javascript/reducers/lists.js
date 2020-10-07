export default function lists(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED":
      const updatedBoard = action.payload.board;
      const otherLists = state.filter((list) => list.board_id !== updatedBoard.id)
      const { lists } = updatedBoard;
      return [...otherLists, ...lists];
    default:
      return state;
  }
}

