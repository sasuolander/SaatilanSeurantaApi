import React from "react";
import { Component } from "react";
import { Measurement } from "./Measurement";
import axios from "axios";
export default class MeasurementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Measurements: [],
      Id: "",
      Id_Station: "",
      Time: "",
      Value: ""
    };
  }

  format_date = date => {
    const year = date.getFullYear(),
      monthIndex = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds();
    return (year + "-" +monthIndex + 
      "-" +day +" " +hour +
      ":" +minute +":" +second
    );
  };

  loadMeasurements= () => {
    const url = "http://localhost:8080/api/Measurements";
    axios
      .get(url)
      .then(response => {
        this.setState({ Measurements: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteMeasurements= key => {
    const url = "http://localhost:8080/api/Measurement/" + key;
    axios
      .post(url, { crossDomain: true })
      .then(response => {
        this.loadMeasurements();
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeMeasurements = key => {
    const url = "http://localhost:8080/api/Measurement/" + key,
      date = this.format_date(new Date());
    const object1 = this.state.Measurements.filter(
        measurement => measurement.id === key
      ),
      Id = object1.id,
      Id_Station = object1.id_Station,
      Value = this.state.Value;
    const object = {
      id: Id,
      id_Station: Id_Station,
      time: date,
      value: Value
    };
    axios
      .patch(url, object, { crossDomain: true })
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChange = (field, event) => {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);};

  componentDidMount() {
    this.loadMeasurements();}

  render() {
    const table = {
      textAlign: "center",
      paddingLeft: 10
    };
    const {Measurements} = this.state;
    const measurements = Measurements.map(measurement => {
      return (
        <Measurement
          key={measurement.id}
          measurement={measurement}
          deleteMeasurement={this.deleteMeasurements.bind(this)}
          changeMeasurement={this.changeMeasurements.bind(this)}
          onChange={this.onChange.bind(this)}
        />
      );
    });
    return (
      <table className={" table is-responsive"} style={table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Id_station</th>
            <th>Measurement Date</th>
            <th>Temperature</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{measurements}</tbody>
      </table>
    );
  }
}