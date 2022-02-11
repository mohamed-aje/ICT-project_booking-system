import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReservationService from "../services/ReservationService";
import "../styles/DashBoard.css";
import FloorFiveLayout from "../FloorFiveLayout";

const DashboardPage = (props) => {
  const user = props.user;
  const [occupiedDesks, setOccupiedDesks] = useState();
  const [isOccupied, setOccupied] = useState(false);
  const [selectedDate, onChange] = useState(new Date());
  const [selectedFloor, setFloor] = useState(1);
  const [desks, setDesks] = useState(null);
  const [selectedDesk, setSelection] = useState(0);
  const [desksOnFloorCount, setCount] = useState(0);
  //  const [buttonDisabled, setBtnDisabled] = useState();
  const [isLoading, setLoading] = useState(true);

  const ExampleCustomInput = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {value}
    </button>
  );

  useEffect(() => {
    const returnDesk = async () => {
      setDesks(await ReservationService.getAllDesks());
    };
    if (!desks) {
      returnDesk();
      setLoading(true);
    } else {
      setLoading(false);
      getReservedDesks();
    }
  }, [selectedDate, selectedFloor, selectedDesk]);

  const saveReservation = async () => {
    await ReservationService.saveReservation(
      selectedDesk,
      selectedDate,
      user.email
    );
    setSelection(0);
  };

  let count = 0;
  const getReservedDesks = () => {
    let occupiedDeskIds = [];
    let index = 0;
    desks.map((desk) => {
      let reservationDates = [];
      let i = 0;
      if (selectedFloor === desk.floor) {
        count++;
        console.log(desksOnFloorCount);
        if (desk.reservations.length !== 0) {
          desk.reservations.map((reservation) => {
            reservationDates[i] = reservation.date;
            i++;
          });
        }
        if (reservationDates.includes(selectedDate.toLocaleDateString())) {
          if (selectedDesk == desk.deskId) {
            setOccupied(true);
          }
          occupiedDeskIds[index] = desk.deskId;
          index++;
        } else if (selectedDesk == desk.deskId) {
          setOccupied(false);
        }
      }
    });
    console.log(occupiedDeskIds);
    setOccupiedDesks(occupiedDeskIds);
    setCount(count);
  };

  // const changeSelection = (id) => {
  //   setSelection(id);
  //   if (occupied == "occupied") {
  //     setOccupied(true);
  //     //setBtnDisabled(true);
  //   } else {
  //     setOccupied(false);
  //     //setBtnDisabled(false);
  //   }
  // };

  // const renderDesk = (desk) => {
  //   if (selectedFloor === desk.floor) {
  //     let selected = "";
  //     if (desk.deskId === selectedDesk) {
  //       selected = "selected";
  //     }
  //     let occupied = "";
  //     if (occupiedDesks.includes(desk.deskId)) {
  //       occupied = "occupied";
  //     } else {
  //       occupied = "free";
  //     }
  //     let style = selected + " " + occupied + " desk";

  //     return (
  //       <div
  //         key={desk.deskId}
  //         onClick={() => changeSelection(desk.deskId, occupied)}
  //         className={style}
  //       ></div>
  //     );
  //   } else {
  //     return null;
  //   }
  // };
  return (
    <>
      {!isLoading ? (
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
                  className={
                    selectedFloor === 1 ? "floorBtn selected" : "floorBtn"
                  }
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
                  className={
                    selectedFloor === 2 ? "floorBtn selected" : "floorBtn"
                  }
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
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                  className="col-6"
                >
                  <b>Selected desk: </b>
                  {selectedDesk !== 0 ? (
                    <>
                      <div
                        style={{
                          backgroundColor: "blue",
                          height: "38px",
                          width: "100px",
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
                          {selectedDesk}
                        </p>
                      </div>
                      {isOccupied ? (
                        <p style={{ color: "red" }}>
                          <b>Occupied</b>
                        </p>
                      ) : (
                        <p style={{ color: "green" }}>
                          <b>Available</b>
                        </p>
                      )}
                    </>
                  ) : (
                    <p style={{ fontSize: "13px" }}>No desk selected</p>
                  )}
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
                  <div
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
                  <div style={{ display: "flex", alignSelf: "flex-end" }}>
                    <button
                      disabled={isOccupied || !selectedDesk}
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

                height: "60vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FloorFiveLayout
                occupiedDesks={occupiedDesks}
                setSelectedDeskID={setSelection}
                desksOnFloorCount={desksOnFloorCount}
              />
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
              {/* <div
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
              </div> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardPage;
