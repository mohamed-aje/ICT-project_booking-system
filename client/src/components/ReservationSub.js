import React, { useState, useEffect } from "react";
import "./styles/ReservationSub.css";
import axios from "axios";
import Footer from "./pages/Footer";
import BarChart from "../charts/BarChart";
import Doughnut from "../charts/Doughnut";
import ReservationService from "./services/ReservationService";

const ReservationsSub = (props) => {
  const selectedDate = props.selectedDate;
  const reservationsForDate = props.reservationsForDate;
  const [allReservations, setAllReservations] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getAllReservations = async () => {
    setAllReservations(await ReservationService.getReservationInfoAll());
  };

  useEffect(() => {
    console.log("hello");
    if (!allReservations) {
      console.log("didn't get reservations yet");
      setLoading(true);
      getAllReservations();
    } else {
      console.log("here are the reservations : " + allReservations);
      setLoading(false);
    }
    console.log(isLoading);
  });

  return (
    <div className="container">
      {!isLoading ? (
        <div className="row">
          <div
            className="col-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "200px" }}>
              <Doughnut reserv={reservationsForDate} />
            </div>
            <div style={{ marginTop: "30px", maxWidth: 520 }}>
              <BarChart reserv={allReservations} />
            </div>
          </div>
          <div
            className="col-6"
            style={{ height: "fit-content", display: "flex" }}
          >
            {reservationsForDate.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Desk</th>
                    <th>Floor</th>
                  </tr>
                </thead>
                <tbody>
                  {reservationsForDate.map((item) => (
                    <tr>
                      <td>{item.user == null ? "Unknown user" : item.user}</td>
                      <td>{item.deskId}</td>
                      <td>{item.floor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No reservations for selected date</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReservationsSub;
