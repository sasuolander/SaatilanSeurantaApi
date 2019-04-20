import React from  'react';
import {Component} from "react";
import Measurement from './Measurement';
import axios from 'axios'
export default class MeasurementList extends Component {
    constructor(props){
        super(props);
        this.state=({
            Measurements:[],
            Id: '',
            Id_Station: '',
            Time: '',
            Value: '',})}

    format_date=(date)=>{
        const   year = date.getFullYear(),
            monthIndex = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();
        return year + '-' + monthIndex + '-' + day + ' ' + hour + ':' + minute + ':' + second;};

    loadMeasurementsFromConst=()=>{
            const data =[
                {
                    "value": 5.2,
                    "id": 1,
                    "time": "2017-08-20 09:37:55",
                    "id_Station": 1
                },
                {
                    "value": 5.8,
                    "id": 2,
                    "time": "2017-06-02 08:07:41",
                    "id_Station": 2
                },
                {
                    "value": 5.6,
                    "id": 3,
                    "time": "2017-06-02 08:07:41",
                    "id_Station": 3
                },
                {
                    "value": 5.8,
                    "id": 4,
                    "time": "2017-06-02 08:07:41",
                    "id_Station": 4
                },
                {
                    "value": 5.7,
                    "id": 5,
                    "time": "2017-06-02 08:07:41",
                    "id_Station": 5
                },
                {
                    "value": 60,
                    "id": 6,
                    "time": "2017-06-02 08:07:41",
                    "id_Station": 1
                }
            ];
            this.setState({Measurements:data});
    }
    loadMeasurementsOverWeb=()=>{
        const url ='http://localhost:8080/api/Measurements';
        axios.get(url).then(response=>{
            this.setState({Measurements:response.data})}
            ).catch(error=>{
                console.log(error)})}

    onDelete=(key)=>{
        //this.DeleteMeasurements(key);
        this.DeleteMeasurementsOverWeb(key);}

    DeleteMeasurements=key=>{
        const measurements =this.state.Measurements.filter((measurement,i)=>i!== key);
        this.setState({measurements})};

    DeleteMeasurementsOverWeb=key=>{
        const url ='http://localhost:8080/api/Measurement/'+key;
        axios.post(url,{crossDomain: true})
            .then(response=>{
            this.loadMeasurementsOverWeb();
        }).catch(error=>{
            console.log(error)})};

    ChangeMeasurement=(key)=>{
        this.ChangeMeasurementsOverWeb(key);}

    onChange=(field,event)=>{
        let object = {};
        object[field] = event.target.value;
        this.setState(object);};

    ChangeMeasurementsOverWeb=(key)=>{
        const url ='http://localhost:8080/api/Measurement/'+key,
              date=this.format_date(new Date());
        const object1 = this.state.Measurements.filter(measurement=> measurement.id===key),
                Id = object1.id,
                Id_Station = object1.id_Station,
                Value = this.state.Value;
        const object = {
               "id": Id,
               "id_Station": Id_Station,
               "time": date,
               "value": Value};
        axios.patch(url,object,{crossDomain: true}).then(response=>{
            this.refreshPage();
            }).catch(error=>{
                console.log(error)})};

    componentDidMount(){
        this.loadMeasurementsOverWeb() //web
        /*this.loadStationFromConst()*/}

    refreshPage=()=>{
        window.location.reload();};

    render()  {
        const table={
            textAlign:"center",
            paddingLeft:10};
    const measurements =this.state.Measurements
        .map((measurement)=>{return<Measurement
                        key={measurement.id}
                        measurement={measurement}
                        deleteMeasurement={this.onDelete.bind(this)}
                        changeMeasurement={this.ChangeMeasurement.bind(this)}
                        onChange={this.onChange.bind(this)}/>});
        return (
            <table className={" table is-responsive"} style={table}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Id_station</th>
                    <th>Measurement Date</th>
                    <th>Temperature</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead><tbody>{measurements}</tbody></table>)}}