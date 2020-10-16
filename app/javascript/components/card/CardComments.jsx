import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/CardActions";

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentCreate: (comment) => {
      dispatch(createComment(comment));
    }
  }
}

class CardComments extends React.Component {
  state = {
    text: "",
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleAddClick = () => {
    this.props.onCommentCreate({ card_id: this.props.card.id, text: this.state.text });
    this.setState({ text: "" });
  }

  render() {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                required=""
                rows="1"
                placeholder="Write a comment..."
                onChange={this.handleChange}
                value={this.state.text}
              ></textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input
                  type="submit"
                  className="button"
                  value="Save"
                  onClick={this.handleAddClick}
                />
              </div>
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(CardComments);
