import React from  'react';
import {Component} from "react";
import Station from './Station';
import axios from 'axios'

export default class StationList extends Component {
    constructor(props){
        super(props);

        this.state = ({
            Stations: []
        })}
    loadStationFromConst(){
        const data =[
            {
                "Id": 1,
                "Name": "Tokyo",
                "PositionX": 139.7328635,
                "PositionY": 35.6584421
            },
            {
                "Id": 2,
                "Name": "Helsinki",
                "PositionX": 24.949083,
                "PositionY": 60.169753
            },
            {
                "Id": 3,
                "Name": "New York",
                "PositionX": -73.9938438,
                "PositionY": 40.7406905
            },
            {
                "Id": 4,
                "Name": "Amsterdam",
                "PositionX": 4.9040238,
                "PositionY": 52.3650691
            },
            {
                "Id": 5,
                "Name": "Dubai",
                "PositionX": 55.1562243,
                "PositionY": 25.092535
            }
        ];
        this.setState({Stations:data});}

    loadStationOverWeb(){
        const url ='http://localhost:8080/api/Stations';
        axios.get(url).then(response=>{
            //console.log(response)
            this.setState({Stations:response.data});}
        ).catch(error=>{
            console.log(error)
        })};

    componentDidMount(){
        //this.loadStationOverWeb();
        this.loadStationFromConst()}

    render() {
        const table={
            textAlign:"center",
            paddingLeft:10};

        const stations = this.state.Stations.map((station)=>{
            return  <Station key={station.Id}
                     station={station}/>});
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
        );}}