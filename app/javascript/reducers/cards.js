const createActivity = (card) => {
  if (card && card.comments.length > 0 || card.actions.length > 0) {
    card.activity = [...card.actions.map((action) => {
      action.type = 'action';
      return action;
    }), ...card.comments.map((comment) => {
      comment.type = 'comment';
      return comment;
    })].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    if (card.activity.length > 5) card.activity.length = 5;
  } else {
    card.activity = [];
  }
}

export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const updatedBoard = action.payload.board;
      const otherCards = state.filter(
        (card) => card.board_id !== updatedBoard.id
      );
      const { lists } = updatedBoard;
      const cards = lists.flatMap((list) => list.cards);
      cards.forEach((card) => createActivity(card));
      return [...otherCards, ...cards];
    case "FETCH_CARD_SUCCESS":
      createActivity(action.payload.card);
      return [
        action.payload.card,
        ...state.filter((card) => card.id !== action.payload.card.id),
      ];
    case "ADD_CARD_SUCCESS":
      createActivity(action.payload.card);
      return [...state, action.payload.card];
    case "UPDATE_CARD_SUCCESS": {
      const card = action.payload.card;
      createActivity(card);
      return [
        card,
        ...state.filter((c) => c.id !== card.id),
      ];
    }
    case "CREATE_COMMENT_SUCCESS" : {
      const comment = action.payload.comment;
      const cardId = comment.card_id;
      const card = {...state.find((card) => card.id === cardId)};
      const comments = [...card.comments, comment];
      card.comments = comments;
      createActivity(card);
      return [card, ...state.filter((c) => c.id !== cardId)];
    }
    default:
      return state;
  }
}
