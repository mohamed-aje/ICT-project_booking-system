import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReservationService from "../services/ReservationService";
import "../styles/DashBoard.css";
import FloorFiveLayout from "../FloorFiveLayout";
import FloorSixLayout from "../FloorSixLayout";
import desk_map1 from "../../utils/FloorFiveData";
import desk_map2 from "../../utils/FloorSixData";
const DashboardPage = (props) => {
  const user = props.user;
  const [occupiedDesks, setOccupiedDesks] = useState();
  const [isOccupied, setOccupied] = useState(false);
  const [selectedDate, onChange] = useState(new Date());
  const [selectedFloor, setFloor] = useState(1);
  const [desks, setDesks] = useState(null);
  const [selectedDesk, setSelection] = useState(0);
  const [desksOnFloorCount, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [floorFiveData, setFFiveData] = useState(desk_map1);
  const [floorSixData, setFSixData] = useState(desk_map2);
  const [floorData, setData] = useState();
  const ExampleCustomInput = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {value}
    </button>
  );

  const returnDesk = async () => {
    setDesks(await ReservationService.getAllDesks());
  };

  useEffect(() => {
    if (!desks) {
      returnDesk();
      setLoading(true);
    } else {
      console.log("got desks");
      getReservedDesks();

      setLoading(false);
    }
  }, [selectedDate, selectedFloor, desks, selectedDesk]);

  const saveReservation = async () => {
    await ReservationService.saveReservation(
      selectedDesk,
      selectedDate,
      user.email
    );
    returnDesk();
    console.log("save reservation");
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
        console.log(count);
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
    setOccupiedDesks(occupiedDeskIds);
    getDeskStyles(occupiedDeskIds);
    setCount(count);
  };

  const getDeskStyles = (occupiedDesks) => {
    setData([]);
    let floorDataWithStyles;
    if (selectedFloor === 1) {
      //to be replaced with fifth floor data
      floorDataWithStyles = floorFiveData;
    } else {
      floorDataWithStyles = floorSixData;
    }
    floorDataWithStyles.map((desk) => {
      let obj = desk;
      console.log(obj.id);
      if (occupiedDesks.includes(obj.id)) {
        obj.style = "occupied";
      } else {
        obj.style = "free";
      }
      console.log(obj);
      console.log(floorData);
      setData((floorData) => [...floorData, obj]);
    });
    console.log(floorData);
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
                <h2 style={{ marginRight: "5px", color: "#02305a" }}>Floor</h2>
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
                      backgroundColor: "#ff5f8f",
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
                      backgroundColor: "#56ff4f",
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
                      backgroundColor: "#02305a",
                      marginRight: "5px",
                    }}
                  ></div>
                  <p>Selected</p>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
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
                  <b style={{ color: "#02305a" }}>Selected desk: </b>
                  {selectedDesk !== 0 ? (
                    <>
                      <div
                        style={{
                          backgroundColor: "#02305a",
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
                        <p style={{ color: "#ff5f8f" }}>
                          <b>Occupied</b>
                        </p>
                      ) : (
                        <p style={{ color: "#56ff4f" }}>
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
                    <b style={{ color: "#02305a" }}>Selected date:</b>
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
              {selectedFloor == 2 ? (
                <FloorSixLayout
                  floorSixData={floorData}
                  setSelectedDeskID={setSelection}
                  selectedDesk={selectedDesk}
                  desksOnFloorCount={desksOnFloorCount}
                  occupiedDesks={occupiedDesks}
                />
              ) : (
                <FloorFiveLayout
                  floorFiveData={floorData}
                  setSelectedDeskID={setSelection}
                  selectedDesk={selectedDesk}
                  desksOnFloorCount={desksOnFloorCount}
                  occupiedDesks={occupiedDesks}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardPage;
