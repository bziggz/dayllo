import React, { Fragment } from 'react';

class AddCard extends React.Component {
  state = {
    newCardTitle: '',
  };

  handleAddNewCardClick = (e) => {
    e.preventDefault();

    this.props.onDropdown(this.props.listId);
  };

  handleChange = (e) => {
    this.setState({ newCardTitle: e.target.value });
  };

  handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      newCardTitle: '',
    });

    this.props.onDropdown(null);
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onAddCard(this.state.newCardTitle);

    this.setState({
      newCardTitle: '',
    });

    this.props.onDropdown(null);
  };

  render () {
    return (
      <Fragment>
        <div className="add-dropdown add-bottom active-card">
          <div className="card">
            <div className="card-info"></div>
            <textarea name="add-card" onChange={this.handleChange} value={this.state.newCardTitle}></textarea>
            <div className="members"></div>
          </div>
          <a className="button" onClick={this.handleSubmitClick}>Add</a><i className="x-icon icon" onClick={this.handleCloseClick}></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom" onClick={this.handleAddNewCardClick}>Add a card...</div>
      </Fragment>
    )
  }
}

export default AddCard;
