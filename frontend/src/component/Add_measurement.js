import React,{ Component } from "react";
import "react-dropdown/style.css";
import axios from "axios";

export default class Add_measurement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Id_Station: "",
      Time: "",
      Value: ""
    };
  }

  onChange = (field, event) => {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  };
  handleChange = (value, event) => {
    this.setState({ Id_Station: event.target.value });
  };

  createObject = () => {
    const { Id_Station, Value, Time } = this.state;
    const object = {
      id: 0,
      id_Station: Id_Station === null ? Id_Station : 1,
      time: Time === null ? Time : this.format_date(new Date()),
      value: Value
    };
    return object;
  };

  onSubmit = (event) => {
    const url = "http://localhost:8080/api/Measurement";
    event.preventDefault();
    axios
      .post(url, this.createObject(), { crossDomain: false })
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  format_date = (date) => {
    return (
      date.getFullYear() +
      "-" +("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +("0" + date.getDate()).slice(-2) + 
      " " +date.getHours() +
      ":" +date.getMinutes() +
      ":" +date.getSeconds()
    );
  };
  render() {
    //"2017-06-02 08:07:41"
    const localtime = this.format_date(new Date()),
      dummy_number = 1.11,
      inputform = {};
    const formstyle = {
      margin: "auto",
      paddingLeft: 50,
      display: "inline-block"
    };
    return (
      <div className={"field is-responsive"}>
        <form onSubmit={this.onSubmit} style={formstyle}>
          {/*Id is generated automatically in the backend*/}
          Time
          <br />
          <input
            className={"input control"}
            style={inputform}
            type="text"
            pattern="\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"
            title="2017-06-02 08:07:41"
            placeholder={localtime}
            value={this.state.Time}
            onChange={this.onChange.bind(this, "Time")}
          />
          <br />
          Measurement
          <br />
          <input
            className={"input control"}
            style={inputform}
            type="text"
            pattern="\d{1,}.\d{2}"
            title="number"
            placeholder={dummy_number}
            value={this.state.Value}
            onChange={this.onChange.bind(this, "Value")}
          />
          <br />
          <select
            onChange={this.handleChange.bind(this, "Id_Station")}
            className={"select"}
          >
            <option value="1">Tokyo</option>
            <option value="2">Helsinki</option>
            <option value="3">New York</option>
            <option value="4">Amsterdam</option>
            <option value="5">Dubai</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
