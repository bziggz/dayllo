import React from "react";
import { useHistory } from "react-router-dom";
import DueDate from "./DueDate";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardLabels from "./CardLabels";
import CardComments from "./CardComments";
import Activity from "./Activity";
import Buttons from "./Buttons";

const Card = (props) => {
  const history = useHistory();

  const handleCloseClick = () => {
    history.push(`/boards/${props.card.board_id}`);
  };

  return (
    <div id="modal-container">
      <div className="screen" onClick={handleCloseClick}></div>
      <div id="modal">
        <i className="x-icon icon close-modal" onClick={handleCloseClick}></i>
        <CardTitle
          card={props.card}
          onCardUpdate={props.onCardUpdate}
          handleCloseClick={handleCloseClick}
        />
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <CardLabels
                  card={props.card}
                  onCardUpdate={props.onCardUpdate}
                  displayLabelPopup={props.displayLabelPopup}
                  toggleLabelClick={props.toggleLabelClick}
                />
                <DueDate
                  dueDate={props.card.due_date}
                  onCardUpdate={props.onCardUpdate}
                  displayDueDatePopup={props.displayDueDatePopup}
                  toggleDueDatePopup={props.toggleDueDatePopup}
                />
              </ul>
              <CardDescription
                card={props.card}
                onCardUpdate={props.onCardUpdate}
              />
            </li>
            <CardComments card={props.card} onCardUpdate={props.onCardUpdate} />
            <Activity activity={props.card.activity}/>
          </ul>
        </section>
        <Buttons
          toggleDueDatePopup={props.toggleDueDatePopup}
          toggleLabelClick={props.toggleLabelClick}
        />
      </div>
    </div>
  );
};

export default Card;
