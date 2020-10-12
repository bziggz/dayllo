import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, props) => {
  let boardId = props.location.pathname.match(/boards/g)
    ? props.match.params.id
    : null;

  if (state.cards.length > 0) {
    boardId = state.cards[0].board_id;
  }

  return {
    board: state.boards.find((board) => +board.id === +boardId),
    card: state.cards[0],
    boardId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBoard: (id) => dispatch(fetchBoard(id)),
  };
};

class BoardContainer extends React.Component {
  componentDidMount = () => {
    this.props.location.pathname.match(/boards/g)
      ? this.props.onFetchBoard(this.props.match.params.id)
      : null;
  };

  componentDidUpdate(prevProps) {
    if (this.props.card && prevProps.boardId !== this.props.card.board_id) {
      this.props.onFetchBoard(this.props.card.board_id)
    }
  }

  render() {
    return this.props.board ? <Board board={this.props.board} /> : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
