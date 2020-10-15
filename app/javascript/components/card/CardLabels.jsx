import React from "react";

class CardLabels extends React.Component {
  onLabelClick = (e) => {
    const id = e.target.dataset.id;
    this.props.card.labels.includes(id)
      ? this.props.onCardUpdate({
          labels: this.props.card.labels.filter((dataId) => id !== dataId),
        })
      : this.props.onCardUpdate({ labels: [...this.props.card.labels, id] });
  };

  onCloseLabelClick = (e) => {
    e.preventDefault();
    this.props.toggleLabelClick();
  };

  render() {
    const labelColors = ["green", "yellow", "orange", "red", "purple", "blue"];

    return (
      <React.Fragment>
        {this.props.displayLabelPopup && (
          <div className="popover labels">
            <div id="add-options-labels-dropdown">
              <header>
                <span>Labels</span>
                <a
                  href="#"
                  className="icon-sm icon-close"
                  onClick={this.onCloseLabelClick}
                ></a>
              </header>
              <div className="content">
                <input
                  className="dropdown-input"
                  placeholder="Search labels..."
                  type="text"
                />
                <div className="labels-search-results">
                  <ul className="label-list">
                    {labelColors.map((color, idx) => {
                      return (
                        <li>
                          <div
                            className={color + " colorblindable"}
                            data-id={idx}
                            onClick={this.onLabelClick}
                            key={idx}
                          >
                            {this.props.card.labels.includes(String(idx)) && (
                              <i className="check-icon sm-icon"></i>
                            )}
                          </div>
                          <div className={color + " label-background"}></div>
                          <div className="label-background-overlay"></div>
                          <i className="edit-icon icon not-implemented"></i>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="light-list">
                    <li className="not-implemented">Create a new label</li>
                    <hr />
                    <li className="toggleColorblind">
                      Enable color blind friendly mode.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <li className="labels-section">
          <h3>Labels</h3>
          {labelColors.map((color, id) => {
            return this.props.card.labels.includes(String(id)) ? (
              <div className="member-container" key={id}>
                <div className={color + " label colorblindable"}></div>
              </div>
            ) : null;
          })}
          <div className="member-container">
            <i
              className="plus-icon sm-icon"
              onClick={this.props.toggleLabelClick}
            ></i>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default CardLabels;
