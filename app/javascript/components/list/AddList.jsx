import React from 'react';

class AddList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newListTitle: '',
      selected: false,
    };
  }

  handleAddNewListClick = (e) => {
    e.preventDefault();

    this.setState({ selected: true });
  };

  handleChange = (e) => {
    this.setState({ newListTitle: e.target.value });
  };

  handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      newListTitle: '',
      selected: false,
    });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onAddList(this.state.newListTitle);

    this.setState({
      newListTitle: '',
      selected: false,
    });
  };

  render() {
    return (
      <div
        id="new-list"
        className={this.state.selected ? 'new-list selected' : 'new-list'}
        onClick={this.handleAddNewListClick}
      >
        <span>Add a list</span>
        <input
          type="text"
          placeholder="Add a list..."
          value={this.state.newListTitle}
          onChange={this.handleChange}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleSubmitClick}
          />
          <i className="x-icon icon" onClick={this.handleCloseClick}></i>
        </div>
      </div>
    );
  }
}

export default AddList;
