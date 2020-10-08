import React from "react";

const AddList = () => {
  return (
    <div id="new-list" className="new-list">
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default AddList;
