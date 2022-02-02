import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReservationService from "../services/ReservationService";
import "../styles/Desk.css";

const DashboardPage = () => {
  const { username } = useParams();
  const [selectedDate, onChange] = useState(new Date());
  const [selectedFloor, setFloor] = useState(1);
  const [desks, setDesks] = useState([]);
  const [selectedDesk, setSelection] = useState();

  useEffect(() => {
    const getAllDesks = async () => {
      try {
        let response = await ReservationService.getAllDesks();
        setDesks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDesks();
  }, [selectedDate, selectedFloor]);

  const renderDesk = (desk) => {
    let reservationDates = [];
    let index = 0;
    if (selectedFloor === desk.floor) {
      if (desk.reservations.length !== 0) {
        desk.reservations.map((reservation) => {
          //console.log(desk.deskId, reservation.date);
          reservationDates[index] = reservation.date;
          index++;
        });
      }

      let selected = "";
      if (desk.deskId === selectedDesk) {
        selected = "selected";
      }
      let occupied = "";
      if (reservationDates.includes(selectedDate.toLocaleDateString())) {
        occupied = "occupied";
        console.log("occupied");
      }
      let style = selected + " " + occupied + " desk";

      return (
        <div
          key={desk.deskId}
          onClick={() => setSelection(desk.deskId)}
          className={style}
        ></div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px", height: "40vh" }}>
        <div
          className="col-6"
          style={{
            backgroundColor: "green",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              justifySelf: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className={selectedFloor === 1 ? "floorBtn selected" : "floorBtn"}
              onClick={() => setFloor(1)}
            >
              <p style={{ textAlign: "center" }}>1</p>
            </div>
            <div
              className={selectedFloor === 2 ? "floorBtn selected" : "floorBtn"}
              onClick={() => setFloor(2)}
            >
              <p style={{ textAlign: "center" }}>2</p>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ height: "40vh", display: "flex" }}>
          <Calendar onChange={onChange} value={selectedDate} />
          <div style={{ marginLeft: "20px" }}>
            <p>Selected date:</p>
            <p>{selectedDate.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundColor: "gray",
            height: "50vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "58px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {desks.map(
              (desk) => renderDesk(desk)
              // <Desk
              //   key={desk.deskId}
              //   desk={desk}
              //   selectedFloor={selectedFloor}
              //   selectedDate={selectedDate}
              // />
            )}
            {/* <div
              onClick={() => setSelection(2)}
              className={selectedDesk === 2 ? "desk selected" : "desk"}
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "80px",
                margin: "4px",
              }}
            ></div>
            <div
              onClick={() => setSelection(3)}
              className={selectedDesk === 3 ? "desk selected" : "desk"}
              style={{
                backgroundColor: "white",
                height: "50px",
                width: "80px",
                margin: "4px",
              }}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
