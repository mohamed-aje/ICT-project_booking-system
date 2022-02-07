import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReservationService from "../services/ReservationService";
import "../styles/DashBoard.css";

const DashboardPage = () => {
  const { username } = useParams();
  const name = username.split(" ");
  const [selectedDate, onChange] = useState(new Date());
  const [selectedFloor, setFloor] = useState(1);
  const [desks, setDesks] = useState([]);
  const [selectedDesk, setSelection] = useState();
  const [buttonDisabled, setBtnDisabled] = useState();
  const ExampleCustomInput = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {value}
    </button>
  );

  useEffect(() => {
    const returnDesk = async () => {
      const deskData = await ReservationService.getAllDesks();
      setDesks(deskData);
      console.log(deskData);
    };
    returnDesk();
  }, [selectedDate, selectedFloor]);

  const saveReservation = async () => {
    ReservationService.saveReservation(selectedDesk, name, selectedDate);
  };

  const changeSelection = (id, occupied) => {
    if (occupied == "occupied") {
      setSelection(<p style={{ color: "red" }}>Desk is occupied!</p>);
      setBtnDisabled(true);
    } else {
      setSelection(id);
      setBtnDisabled(false);
    }
  };

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
          onClick={() => changeSelection(desk.deskId, occupied)}
          className={style}
        ></div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{ marginTop: "20px", marginBottom: "20px", height: "20vh" }}
      >
        <div
          className="col-3"
          style={{
            backgroundColor: "white",
            height: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <h2 style={{ marginRight: "5px" }}>Floor</h2>
            <div
              className={selectedFloor === 1 ? "floorBtn selected" : "floorBtn"}
              onClick={() => setFloor(1)}
            >
              <p
                style={{
                  textalign: "center",
                  marginBottom: "0px",
                }}
              >
                1
              </p>
            </div>
            <div
              className={selectedFloor === 2 ? "floorBtn selected" : "floorBtn"}
              onClick={() => setFloor(2)}
            >
              <p
                style={{
                  textalign: "center",
                  marginBottom: "0px",
                }}
              >
                2
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "red",
                  marginRight: "5px",
                }}
              ></div>
              <p>Occupied</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "green",
                  marginRight: "5px",
                }}
              ></div>
              <p>Available</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "blue",
                  marginRight: "5px",
                }}
              ></div>
              <p>Selected</p>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ backgroundColor: "green" }}>
          <p style={{ textAlign: "center", color: "white" }}>
            Charts come here
          </p>
        </div>
        <div
          className="col-3"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <b>Selected date:</b>
              <div>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => onChange(date)}
                  customInput={<ExampleCustomInput />}
                />
              </div>
            </div>
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <b>Selected desk: </b>
                <div
                  style={{
                    backgroundColor: "blue",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      marginBottom: "0px",
                      fontSize: "18px",
                    }}
                  >
                    test{selectedDesk}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignSelf: "flex-end" }}>
                <button
                  disabled={buttonDisabled || !selectedDesk}
                  type="button"
                  className="btn btn-primary"
                  onClick={() => saveReservation()}
                >
                  Book desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-12"
          style={{
            marginTop: "10px",
            backgroundColor: "gray",
            height: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 461 259"
            style={{ position: "relative", height: "100%", width: "auto" }}
          >
            <defs></defs>

            <rect className="cls-1" x="20" y="22" width="425" height="219" />
            <rect className="cls-2" x="20" y="188" width="86" height="53" />
            <rect className="cls-2" x="359" y="22" width="86" height="53" />
            <rect
              className="cls-2"
              x="217"
              y="221"
              width="86"
              height="53"
              transform="translate(439.5 -195.5) rotate(90)"
            />
            <rect
              className="cls-3"
              x="312"
              y="221"
              width="86"
              height="53"
              transform="translate(534.5 -290.5) rotate(90)"
  
            />
            <rect
              className="cls-2"
              x="125"
              y="221"
              width="86"
              height="53"
              transform="translate(342.5 -98.5) rotate(90)"
            />
            <rect
              className="cls-2"
              x="309"
              y="353"
              width="86"
              height="53"
              transform="translate(663.5 -155.5) rotate(90)"
            />
            <rect
              className="cls-4"
              x="212"
              y="353"
              width="86"
              height="53"
              transform="translate(566.5 -58.5) rotate(90)"
            />
            <rect
              className="cls-2"
              x="402"
              y="353"
              width="86"
              height="53"
              transform="translate(756.5 -248.5) rotate(90)"
            />
            <rect
              id="_Slice_"
              data-name="&lt;Slice&gt;"
              className="cls-5"
              width="461"
              height="259"
            />
          </svg> */}
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
              //  <Desk
              //   key={desk.deskId}
              //    desk={desk}
              //    selectedFloor={selectedFloor}
              //  selectedDate={selectedDate}
              // />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
