import React from "react";
import { Component } from "react";
import { Station } from "./Station";
import axios from "axios";

export default class StationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Stations: []
    };
  }

  loadStation() {
    const url = "http://localhost:8080/api/Stations";
    axios
      .get(url)
      .then(response => {
        this.setState({ Stations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadStation();
  }

  render() {
    const table = {
      textAlign: "center",
      paddingLeft: 10
    };

    const { Stations } = this.state,
      stations = Stations.map(station => {
        return (
          <Station
            key={station.Id}
            Id={station.Id}
            Name={station.Name}
            PositionX={station.PositionX}
            PositionY={station.PositionY}
          />
        );
      });
    return (
      <table className={"table is-responsive"} style={table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>PositionX</th>
            <th>PositionY</th>
          </tr>
        </thead>
        <tbody>{stations}</tbody>
      </table>
    );
  }
}