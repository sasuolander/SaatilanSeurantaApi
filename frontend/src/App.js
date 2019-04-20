import React from 'react';
import Add_measurement from './component/Add_measurement'
import MeasurementList from'./component/MeasurementList'
import StationList from './component/StationList'
import "bulma/css/bulma.css";
export const App =({})=>{
    return (
        <div className={"tile is-vertical is-8"}>
            <div className={""}>
                <div className={"level"}>
                    <div className={"level-item"}>
                        <StationList/>
                        <Add_measurement/>
                    </div>
                </div>
                <div className={'level'}>
                    <div className={'level-item'}>
                        <MeasurementList/>
                    </div>
                </div>
            </div>
        </div>);
}