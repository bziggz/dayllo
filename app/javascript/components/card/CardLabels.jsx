import React from "react";

class CardLabels extends React.Component {
  render() {
    return (
      <li class="labels-section">
        <h3>Labels</h3>
        <div class="member-container">
          <div class="green label colorblindable"></div>
        </div>
        <div class="member-container">
          <div class="yellow label colorblindable"></div>
        </div>
        <div class="member-container">
          <div class="orange label colorblindable"></div>
        </div>
        <div class="member-container">
          <div class="blue label colorblindable"></div>
        </div>
        <div class="member-container">
          <div class="purple label colorblindable"></div>
        </div>
        <div class="member-container">
          <div class="red label colorblindable"></div>
        </div>
        <div class="member-container">
          <i class="plus-icon sm-icon"></i>
        </div>
      </li>
    );
  }
}

export default CardLabels;
