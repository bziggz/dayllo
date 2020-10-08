import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    board: state.boards.find((board) => {
      return +board.id === +id;
    }),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;
  return {
    onFetchBoard: () => {
      fetch(`/api/boards/${id}`).then((board) => {
        board.json().then((brd) => {
          dispatch(fetchBoard(brd));
        });
      });
    },
  };
};

class BoardContainer extends React.Component {
  componentDidMount = () => {
    this.props.onFetchBoard();
  };

  render() {
    return this.props.board ? <Board board={this.props.board} /> : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
