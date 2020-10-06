import React from 'react';

class Board extends React.Component {
  componentDidMount = () => {
    console.log(this.props.onFetchBoard());
  };

  render() {
    return <p>hello</p>;
  }
}

export default Board;
