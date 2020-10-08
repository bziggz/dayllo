import React from 'react';
import ListListingContainer from '../list/ListListingContainer';

class Board extends React.Component {
  render() {
    return (
      <ListListingContainer board={this.props.board} />
    );
  }
}

export default Board;
