DeleteMeasurements = key => {
  const measurements = this.state.Measurements.filter(
    (measurement, i) => i !== key
  );
  this.setState({ measurements });
};

onDelete = key => {
  this.DeleteMeasurementsOverWeb(key);
};

loadMeasurementsFromConst = () => {
  const data = [
    {
      value: 5.2,
      id: 1,
      time: "2017-08-20 09:37:55",
      id_Station: 1
    },
    {
      value: 5.8,
      id: 2,
      time: "2017-06-02 08:07:41",
      id_Station: 2
    },
    {
      value: 5.6,
      id: 3,
      time: "2017-06-02 08:07:41",
      id_Station: 3
    },
    {
      value: 5.8,
      id: 4,
      time: "2017-06-02 08:07:41",
      id_Station: 4
    },
    {
      value: 5.7,
      id: 5,
      time: "2017-06-02 08:07:41",
      id_Station: 5
    },
    {
      value: 60,
      id: 6,
      time: "2017-06-02 08:07:41",
      id_Station: 1
    }
  ];
  this.setState({ Measurements: data });
};
ChangeMeasurement = key => {
  this.ChangeMeasurementsOverWeb(key);
};

loadStationFromConst=()=>{
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
  this.setState({Stations:data});};
