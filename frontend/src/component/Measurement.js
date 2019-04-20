import React from "react";

export const Measurement = ({
  measurement,
  Value,
  deleteMeasurement,
  changeMeasurement,
  onChange
}) => {
  const symbol = "°",
    placeholder = measurement.value + symbol;
  return (
    <tr>
      <td>{measurement.id}</td>
      <td>{measurement.id_Station}</td>
      <td>{measurement.time}</td>
      <td>
        <form>
          <input
            type="text"
            pattern="\d{1,}.\d{2}"
            placeholder={placeholder}
            title="number"
            value={Value}
            onChange={onChange.bind(this, "Value")}
          />
        </form>
      </td>
      <td>
        <button
          className={"button is-danger"}
          onClick={() => deleteMeasurement(measurement.id)}
        >
          DELETE
        </button>
      </td>
      <td>
        <button
          type="submit"
          className={"button is-danger"}
          onClick={() => changeMeasurement(measurement.id)}
        >
          Change
        </button>
      </td>
    </tr>
  );
};
