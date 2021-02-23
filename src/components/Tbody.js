import React from "react";
import InfoModal from "./InfoModal";
//This maps through the random users and creates a new table row for each user
function Tbody(props) {
  const tableData = props.results.map((employee) => (
    <tr key={employee.email}>
      <th scope="row">{<InfoModal params={employee} />}</th>
      <td>
        <img
          className="img-fluid img-thumbnail"
          src={employee.picture.medium}
          alt={employee.name.first}
        />
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>
        {employee.location.city}, {employee.location.state},{" "}
        {employee.location.country}
      </td>
    </tr>
  ));
  return <tbody>{tableData}</tbody>;
}

export default Tbody;
