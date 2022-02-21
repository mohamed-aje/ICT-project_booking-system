import React, { useState, useEffect } from "react";
import "./styles/ReservationSub.css";
import axios from "axios";
import Footer from "./pages/Footer";

const ReservationsSub = (props) => {
  const selectedDate = props.selectedDate;
  const numOfAllDesks = props.numOfAllDesks;
  const occupiedDesksCount = props.occupiedDesksCount;
  const [reservationById, setReservationById] = useState(null);
  const url = "http://localhost:8080/reservations/getAllForAll";

  //here useeffect that retrieves the reservations using URL (http://localhost:8080/reservations/getAllForAll)
  useEffect(() => {
    axios.get(url).then((response) => {
      setReservationById(response.data);
    });
  }, [url]);
  if (reservationById) {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-6"
            style={{ background: "red", display: "flex", height: "" }}
          >
            <p>charts comes here</p>
          </div>
          <div className="col-6" style={{ height: "200px", display: "flex" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Employee</th>
                  <th>Desk</th>
                  <th>Floor</th>
                </tr>
              </thead>
              <tbody>
                {console.log(reservationById)}
                {reservationById.map((item) => (
                  <tr>
                    <td>
                      <b>{item.reservations.date}</b>
                    </td>
                    <td>
                      {item.reservations.user.firstName}{" "}
                      {item.reservations.user.lastName}
                    </td>
                    <td>{item.desk_id}</td>
                    <td>{item.floor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};
export default ReservationsSub;
