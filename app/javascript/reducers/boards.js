export default function boards(state = [], action) {
  switch (action.type) {
    case "BOARD_FETCHED":
      const updatedBoard = action.payload.board;
      const otherBoards = state.filter((brd) => brd.id !== updatedBoard.id);
      const { lists, ...boardWithoutLists } = updatedBoard;
      return [...otherBoards, boardWithoutLists];
    case "FETCH_BOARDS_SUCCESS":
      return action.boards;
    case "CREATE_BOARD_SUCCESS":
      const newBoard = action.board;
      return state.concat(newBoard);
    default:
      return state;
  }
}
