import React from "react";
import Pikaday from "pikaday";
import moment from "moment";

class DueDatePopup extends React.Component {
  componentDidMount() {
    this.picker = new Pikaday({
      field: this.refs.dateInput,
      bound: false,
      container: this.refs.calendar,
      firstDay: 1,
      yearRange: 10,
      defaultDate: this.defaultDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      keyboardInput: false,
      toString(date, format) {
        return moment(date).format(format);
      },
    });
    this.picker.show();
  }

  defaultDate = () => {
    if (this.props.dueDate) {
      return moment(this.props.dueDate).toDate();
    } else {
      const time = moment().add(1, "day");
      time.set({ hour: 12, minute: 0, second: 0 });
      return time.toDate();
    }
  };

  onCloseClick = (e) => {
    e.preventDefault();
    this.props.toggleDueDatePopup();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCardUpdate({ due_date: new Date(this.picker.toString()) });
    this.props.toggleDueDatePopup();
  };

  handleRemove = () => {
    this.props.onCardUpdate({ due_date: "" });
    this.props.toggleDueDatePopup();
  };

  render() {
    return (
      <div className="popover due-date">
        <header>
          <span>Change due date</span>
          <a
            href="#"
            onClick={this.onCloseClick}
            className="icon-sm icon-close"
          ></a>
        </header>
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input
                    type="text"
                    placeholder="Enter date"
                    autofocus
                    ref="dateInput"
                  />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input
                    type="text"
                    placeholder="Enter time"
                    value="12:00 PM"
                  />
                </label>
              </div>
              <div id="calendar-widget" ref="calendar"></div>
            </div>
            <button className="button" type="submit">
              Save
            </button>
            <button
              className="button red-button"
              type="reset"
              onClick={this.handleRemove}
            >
              Remove
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DueDatePopup;
