import React from "react";
import "./styles/ReservationSub.css";

const ReservationsSubpage = (props) => {
  // const selectedDate = props.selectedDate;
  // const numOfAllDesks = props.numOfAllDesks;
  // const occupiedDesksCount = props.occupiedDesksCount;

  //here useeffect that retrieves the reservations using URL (http://localhost:8080/reservations/getAllForAll)
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{ background: "red", display: "flex", height: "" }}
        >
          <p>charts comes here</p>
        </div>
        <div className="col-6" style={{ background: "blue", display: "flex" }}>
          <p>table comes here</p>
        </div>
      </div>
    </div>
  );
};
export default ReservationsSubpage;
