import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Board from './Board';

// const boardId = useParams().id;

const mapStateToProps = (state) => {
  const boardId = useParams().id;
  return {
    board: state.boards.find((board) => {
      board.id === boardId;
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  const boardId = useParams().id;
  return {
    onFetchBoard: () => {
      fetch(`/api/boards/${boardId}`).then((board) => {
        board.json().then((brd) => {
          console.log(brd);
          dispatch({ type: 'BOARD_FETCHED', payload: { board: brd } });
        });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
