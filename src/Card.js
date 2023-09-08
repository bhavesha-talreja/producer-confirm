/* eslint-disable array-callback-return */
import React from "react";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VIEW_DETAILS } from "./constants/routes";

const Card = ({ item }) => {
  const navigate = useNavigate();
  //const [selectedElement, setSelectedElement] = useState(null);

  const onViewDetailsClickHandler = (el) => {
    //setSelectedElement(el);
    console.log(el);
    navigate(`${VIEW_DETAILS}`, { state: el });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        {item.map((el) => {
          return (
            <div
              style={{ width: "375px" }}
              key={`${el.episodeNumber} ${el.show}`}
              className=" card col-md-4 col-sm-6 card my-3 border-0"
            >
              <div className="card-body">
                <div
                  style={{
                    minHeight: "290px",
                    Height: "290px",
                    backgroundColor: "#eeeeee",
                  }}
                  className="fw-bold fs-5 square  rounded justiy-content-center"
                >
                  <div className="d-felx justify-content-center p-4">
                    <p>Show : {el.show}</p>
                    <p> Epidose Number : {el.episodeNumber}</p>
                    <p>Status : {el.status}</p>
                  </div>
                  <div className="text-center">
                    <button
                      className="rounded"
                      filteredData={item}
                      onClick={() => onViewDetailsClickHandler(el)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {selectedElement && <Details selectedElement={selectedElement} />} */}
    </div>
  );
};

export default Card;
