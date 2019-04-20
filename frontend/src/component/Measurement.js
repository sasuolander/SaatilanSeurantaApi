import React from  'react';
import {Component} from "react";

export default class Measurement extends Component {
    constructor(props){
        super(props);
        this.state = ({
            Id: '',
            Id_Station: '',
            Time: '',
            Value: ''});
        this.deleteMeasurement=
            this.deleteMeasurement.bind(this);
        this.changeMeasurement=
            this.changeMeasurement.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    deleteMeasurement(id){
        this.props.deleteMeasurement(id);};
    changeMeasurement(id){
        this.props.changeMeasurement(id);};
    onChange(field, event){
        this.props.onChange(field,event);}
    render(){
        const symbol ="°",
            placeholder =this.props.measurement.value+symbol;
        return (
                <tr>
                    <td>
                    {this.props.measurement.id}
                    </td>
                    <td>
                        {this.props.measurement.id_Station}
                    </td>
                    <td>
                        {this.props.measurement.time}
                    </td>
                    <td>
                        <form>
                            <input
                                type="text"
                                pattern="\d{1,}.\d{2}"
                                placeholder={placeholder}
                                title="number"
                                value={this.props.Value}
                                onChange={this.onChange.bind(this, 'Value')}/>
                        </form>
                    </td>
                    <td>
                        <button className={"button is-danger"}
                                onClick={()=>this.deleteMeasurement(this.props.measurement.id)}>DELETE</button>
                    </td>
                    <td>
                        <button type="submit" className={"button is-danger"}
                                onClick={()=>this.changeMeasurement(this.props.measurement.id)}>Change</button>
                    </td></tr>);}}