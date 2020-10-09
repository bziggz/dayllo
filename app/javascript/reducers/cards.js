export default function cards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const updatedBoard = action.payload.board;
      const otherCards = state.filter(
        (card) => card.board_id !== updatedBoard.id
      );
      const { lists } = updatedBoard;
      const cards = lists.flatMap((list) => list.cards);
      return [...otherCards, ...cards];
    default:
      return state;
  }
}
