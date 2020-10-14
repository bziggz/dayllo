import React from "react";
import Pikaday from "pikaday";
import moment from "moment";

class DueDate extends React.Component {
  constructor(props) {
    super(props);
  }

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

  defaultMoment = () => {
    if (this.props.dueDate) {
      return moment(this.props.dueDate);
    } else {
      const time = moment().add(1, "day");

      time.set({ hour: 12, minute: 0, second: 0 });

      return time;
    }
  };

  defaultDate = () => {
    this.defaultMoment().toDate();
  };

  render() {
    return (
      <div>
        <li className="due-date-section">
          <h3>Due Date</h3>
          <div id="dueDateDisplay" className="overdue completed">
            {/* <DueDate /> */}
            <input
              id="dueDateCheckbox"
              type="checkbox"
              className="checkbox"
              checked=""
            />
            Insert Due Date Here
            <span>(past due)</span>
          </div>
        </li>
        {/* <div className="popover due-date">
          <header>
            <span>Change due date</span>
            <a href="#" className="icon-sm icon-close"></a>
          </header>
          <div className="content">
            <form>
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
              <button className="button red-button" type="reset">
                Remove
              </button>
            </form>
          </div>
        </div> */}
      </div>
    );
  }
}

export default DueDate;
