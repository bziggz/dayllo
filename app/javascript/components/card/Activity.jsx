import React from "react";

const Activity = (props) => (
  <li className="activity-section">
    <h2 className="activity-icon icon">Activity</h2>
    <ul className="horiz-list">
      <li className="not-implemented">Show Details</li>
    </ul>
    <ul className="modal-activity-list">
      <li>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <h3>Taylor Peat</h3>
        <div className="comment static-comment">
          <span>The activities are not functional.</span>
        </div>
        <small>
          22 minutes ago - <span className="link">Edit</span> -{" "}
          <span className="link">Delete</span>
        </small>
        <div className="comment">
          <label>
            <textarea required="" rows="1">
              The activities have not been implemented yet.
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
      <li>
        <div className="member-container">
          <div className="card-member small-size">VR</div>
        </div>
        <p>
          <span className="member-name">Victor Reyes</span> changed the
          background of this board <small>yesterday at 4:53 PM</small>
        </p>
      </li>
      <li className="activity-comment">
        <div className="member-container">
          <div className="card-member">VR</div>
        </div>
        <h3>Victor Reyes</h3>
        <div className="comment static-comment">
          <span>Example of a comment.</span>
        </div>
        <small>
          22 minutes ago - <span className="link">Edit</span> -{" "}
          <span className="link">Delete</span>
        </small>
        <div className="comment">
          <label>
            <textarea required="" rows="1">
              Example of a comment.
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
    </ul>
  </li>
);

export default Activity;
