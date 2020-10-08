import React from "react";
import { connect } from "react-redux";
import ListContainer from "./ListContainer";
import AddList from "./AddList";
import * as actions from "../../actions/ListActions";

const mapStateToProps = (state, props) => {
  const boardId = props.board.id;
  return {
    lists: state.lists.filter((list) => list.board_id === boardId),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddList: (title) => {
      const boardId = props.board.id;

      const fetchObj = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title,
          board_id: boardId,
        }),
      };

      fetch("/api/lists", fetchObj).then((list) => {
        list.json().then((l) => {
          dispatch(actions.createList(l));
        });
      });
    },
  };
};

class ListListingContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li id="title">{this.props.board.title}</li>
            <li className="star-icon icon"></li>
            <li className="private private-icon icon">Private</li>
          </ul>
          <div className="menu">
            <i className="more-icon sm-icon"></i>Show Menu
          </div>
          <div className="subscribed">
            <i className="sub-icon sm-icon"></i>Subscribed
          </div>
        </header>
        <main>
          <div id="list-container" className="list-container">
            <div id="existing-lists" className="existing-lists">
              {this.props.lists.map((list) => (
                <ListContainer key={list.id} list={list} />
              ))}
            </div>
            <AddList onAddList={this.props.onAddList} />
          </div>
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListListingContainer);
