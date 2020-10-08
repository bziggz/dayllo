import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const mapStateToProps = (state, props) => {
  return {
    cards: state.cards.filter((card) => card.list_id === props.list.id),
  };
};

class List extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <p className="list-title">{this.props.list.title}</p>
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            {this.props.cards.map((card) => {
              return (
                <div id="cards-container">
                  <Card card={card} key={card.id} />
                </div>
              );
            })}
            <div className="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(List);
