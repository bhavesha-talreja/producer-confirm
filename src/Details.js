import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD } from "./constants/routes";
//import Data from "./dev-data/Data";
//import { useParams } from "react-router-dom";
//import Data from "./dev-data/Data";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedElement = location.state;
  const itemsToDisplay = selectedElement.items;

  const onclickHandler = () => {
    navigate(`${DASHBOARD}`);
  };

  const x = [];
  let i = 0;
  itemsToDisplay.forEach((element) => {
    x.push(
      <tr key={i++}>
        <td className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
          {element.timecodeIn}
        </td>
        <td>{element.timecodeOut}</td>
        <td>{element.comment}</td>
        <td>{element.categoryName}</td>
      </tr>
    );
  });
  console.log(x);

  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table
          id="table"
          className="table align-items-center justify-content-center mb-0"
        >
          <thead>
            <tr>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Timecode in
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                Timecode Out
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                comment
              </th>
              <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                category Name
              </th>
            </tr>
          </thead>
          <tbody>{x}</tbody>
        </table>
      </div>
      <div className="text-center p-2">
        <button className="rounded" onClick={onclickHandler}>
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default Details;
