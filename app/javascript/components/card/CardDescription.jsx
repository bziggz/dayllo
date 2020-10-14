import React from "react";

class CardDescription extends React.Component {
  state = {
    description: this.props.card.description,
    editMode: false,
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleEditDescriptionClick = () => {
    this.setState({ editMode: true });
  };

  handleEditCloseClick = () => {
    this.setState({ editMode: false });
  };

  handleSaveDescriptionClick = () => {
    this.props.onCardUpdate({ description: this.state.description });

    this.handleEditCloseClick();
  };

  render() {
    return (
      <form className="description">
        {this.state.editMode ? (
          <div>
            <p>Description</p>
            <textarea
              className="textarea-toggle"
              rows="1"
              autoFocus
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            ></textarea>
            <div>
              <div
                className="button"
                value="Save"
                onClick={this.handleSaveDescriptionClick}
              >
                Save
              </div>
              <i
                className="x-icon icon"
                onClick={this.handleEditCloseClick}
              ></i>
            </div>
          </div>
        ) : (
          <div>
            <p>Description</p>
            <span
              id="description-edit"
              className="link"
              onClick={this.handleEditDescriptionClick}
            >
              Edit
            </span>
            <p className="textarea-overlay">{this.state.description}</p>
          </div>
        )}
        <p id="description-edit-options" className="hidden">
          You have unsaved edits on this field.{" "}
          <span className="link">View edits</span> -{" "}
          <span className="link">Discard</span>
        </p>
      </form>
    );
  }
}

export default CardDescription;
