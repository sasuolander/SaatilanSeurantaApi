import React from  'react';
import {Component} from "react";
import 'react-dropdown/style.css'
import axios from 'axios'

export default class Add_measurement extends Component {
    constructor(props) {super(props);
        this.state = ({
            Id: '',
            Id_Station: '',
            Time: '',
            Value: ''})}

    onChange = (field, event) => {
        let object = {};
        object[field] = event.target.value;
        this.setState(object);};
    handleChange = (value, event) => {
        this.setState({Id_Station: event.target.value});
    };

    createObject=()=>{
        const   date=this.format_date(new Date());
        const   integer=1;
        const   Id = 0,
            Id_Station = this.state.Id_Station===null ? this.state.Id_Station:integer,
            Value = this.state.Value,
            Time = this.state.Time ===null ? this.state.Time:date;
        const object = {
            "id": Id,
            "id_Station": Id_Station,
            "time": Time,
            "value": Value}; return object;};

    onSubmit = (event) => {
        const url = "http://localhost:8080/api/Measurement";
        event.preventDefault();
        axios.post(url, this.createObject(),{crossDomain: false})
            .then(response=>{
                //console.log(response)
                window.location.reload();})
            .catch(error => {
                console.log(error)})
    };
     format_date=(date)=>{
        const   year = date.getFullYear(),
                monthIndex = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds();
        return year + '-' + monthIndex + '-' + day + ' ' + hour + ':' + minute + ':' + second;};
    render() {
        //"2017-06-02 08:07:41"
        const   localtime = this.format_date(new Date()),
                dummy_number = 1.11,
                inputform = {};
        const formstyle =  {
            margin: 'auto',
            paddingLeft: 50,
            display: 'inline-block',};
        return (
            <div className={"field is-responsive"}>
                <form onSubmit={this.onSubmit} style={formstyle} >
                    {/*Id is generated automatically in the backend*/}
                    Time<br/><input className={"input control"}
                    style={inputform}
                    type="text"
                    pattern="\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"
                    title="2017-06-02 08:07:41"
                    placeholder={localtime}
                    value={this.state.Time}
                    onChange={this.onChange.bind(this, 'Time')}/><br/>
                    Measurement<br/><input
                    className={"input control"}
                    style={inputform}
                    type="text"
                    pattern="\d{1,}.\d{2}"
                    title="number"
                    placeholder={dummy_number}
                    value={this.state.Value}
                    onChange={this.onChange.bind(this, 'Value')}/><br/>
                    <select onChange={this.handleChange.bind(this, 'Id_Station')} className={"select"}>
                        <option value="1">Tokyo</option>
                        <option value="2">Helsinki</option>
                        <option value="3">New York</option>
                        <option value="4">Amsterdam</option>
                        <option value="5">Dubai</option>
                    </select><br/>
                    <button type="submit">submit</button>
                </form>
            </div>);}}