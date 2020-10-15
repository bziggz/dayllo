import React from "react";

const Buttons = (props) => (
  <aside className="modal-buttons">
    <h2>Add</h2>
    <ul>
      <li className="member-button not-implemented">
        <i className="person-icon sm-icon"></i>Members
      </li>
      <li className="label-button" onClick={props.toggleLabelClick}>
        <i className="label-icon sm-icon"></i>Labels
      </li>
      <li className="checklist-button not-implemented">
        <i className="checklist-icon sm-icon"></i>Checklist
      </li>
      <li className="date-button" onClick={props.toggleDueDatePopup}>
        <i className="clock-icon sm-icon"></i>Due Date
      </li>
      <li className="attachment-button not-implemented">
        <i className="attachment-icon sm-icon"></i>Attachment
      </li>
    </ul>
    <h2>Actions</h2>
    <ul>
      <li className="move-button not-implemented">
        <i className="forward-icon sm-icon"></i>Move
      </li>
      <li className="copy-button not-implemented">
        <i className="card-icon sm-icon"></i>Copy
      </li>
      <li className="subscribe-button not-implemented">
        <i className="sub-icon sm-icon"></i>Subscribe
        <i className="check-icon sm-icon"></i>
      </li>
      <hr />
      <li className="archive-button not-implemented">
        <i className="file-icon sm-icon "></i>Archive
      </li>
    </ul>
    <ul className="light-list not-implemented">
      <li className="not-implemented">Share and more...</li>
    </ul>
  </aside>
);
export default Buttons;
