import React from  'react';
import {Component} from "react";
export default class Station extends Component {
    render() {return (
                <tr><td>
                {this.props.station.Id}
                </td><td>
                {this.props.station.Name}
                </td><td>
                {this.props.station.PositionX}
                </td><td>
                {this.props.station.PositionY}
                </td></tr>);}}