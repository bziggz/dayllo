import React from "react";

class CardTitle extends React.Component {
  state = {
    title: this.props.card.title,
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleBlur = () => {
    this.props.onCardUpdate({ title: this.state.title });
  };

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          onChange={this.handleTitleChange}
          value={this.state.title}
          onBlur={this.handleBlur}
        ></textarea>
        <p>
          in list <a className="link">Stuff to try (this is a list)</a>
          <i className="sub-icon sm-icon"></i>
        </p>
      </header>
    );
  }
}

export default CardTitle;
