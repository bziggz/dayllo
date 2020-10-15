import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ card }) => {
  const labelColors = ["green", "yellow", "orange", "red", "purple", "blue"];
  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labelColors.map((color, id) => {
              return card.labels.includes(String(id)) ? (
                <div
                  className={color + " card-label colorblindable"}
                  key={id}
                ></div>
              ) : null;
            })}
            <p>{card.title}</p>
          </div>
          <div className="card-icons">
            {card.due_date &&
            <i className="clock-icon sm-icon overdue-recent completed">
              {moment(card.due_date).format('MM/DD/YYYY')}
            </i>
            }
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
