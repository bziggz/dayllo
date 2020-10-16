import React from "react";
import moment from 'moment';

const Activity = (props) => {
  const output = props.activity.map((activity) => {
    if (activity.type === 'action') {
      return (
        <li>
          <div className="member-container">
            <div className="card-member small-size">TT</div>
          </div>
          <p>
            <span className="member-name">Toll Troll</span> {activity.description} <small>{moment(activity.updated_at).fromNow()}</small>
          </p>
        </li>
      )
    } else if (activity.type === 'comment') {
      return (
        <li>
          <div className="member-container">
            <div className="card-member">TT</div>
          </div>
          <h3>Toll Troll</h3>
          <div className="comment static-comment">
            <span>{activity.text}</span>
          </div>
          <small>
          {moment(activity.updated_at).fromNow()} - <span className="link">Edit</span> -{" "}
            <span className="link">Delete</span>
          </small>
          <div className="comment">
            <label>
              <textarea required="" rows="1" value={activity.text}>
              </textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
              </div>
              <div>
                <p>You haven't typed anything!</p>
                <input
                  type="submit"
                  className="button not-implemented"
                  value="Save"
                />
                <i className="x-icon icon"></i>
              </div>
            </label>
          </div>
        </li>
      )
    }
  })

  return (
  <li className="activity-section">
    <h2 className="activity-icon icon">Activity</h2>
    <ul className="horiz-list">
      <li className="not-implemented">Show Details</li>
    </ul>
    <ul className="modal-activity-list">
      {output}
    </ul>
  </li>
  )
};

export default Activity;
