import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { updateList } from '../../actions/ListActions';

const mapStateToProps = (state, props) => {
  return {
    cards: state.cards.filter((card) => card.list_id === props.list.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onListUpdate: (state) => {
      dispatch(updateList(ownProps.list.id, state));
    },
  };
};

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.list.title,
    };
  }

  onTitleChange = (event) => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };

  handleBlur = (e) => {
    this.props.onListUpdate(this.state);
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <input
                type="text"
                className="list-title"
                value={this.state.title}
                onChange={this.onTitleChange}
                onBlur={this.handleBlur}
              />
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
                <div id="cards-container" key={card.id}>
                  <Card card={card} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
