import React from "react";
import DueDatePopup from "./DueDatePopup";
import moment from "moment";

const DueDate = (props) => {
  const onDateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.toggleDueDatePopup();
  };

  return (
    <div>
      {props.displayDueDatePopup && (
        <DueDatePopup
          dueDate={props.dueDate}
          toggleDueDatePopup={props.toggleDueDatePopup}
          onCardUpdate={props.onCardUpdate}
        />
      )}

      <li className="due-date-section">
        <h3>Due Date</h3>
        <div
          id="dueDateDisplay"
          className={
            moment(props.dueDate).isBefore(moment.now())
              ? "overdue"
              : "completed"
          }
        >
          <input id="dueDateCheckbox" type="checkbox" className="checkbox" />
          <span onClick={onDateClick}>
            {!props.dueDate ? (
              <span> No Due Date</span>
            ) : (
              <span> {moment(props.dueDate).format("MMMM Do YYYY")} </span>
            )}
            {moment(props.dueDate).isBefore(moment.now()) && (
              <span> (past due)</span>
            )}
          </span>
        </div>
      </li>
    </div>
  );
};
export default DueDate;
