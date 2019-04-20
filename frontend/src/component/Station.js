import React from "react";
export const Station = ({ Id, Name, PositionX, PositionY }) => (
  <tr>
    <td>{Id}</td>
    <td>{Name}</td>
    <td>{PositionX}</td>
    <td>{PositionY}</td>
  </tr>
);
