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
import FloorButton from "../FloorButton";
import { SwitchMultiButton } from "switch-multi-button";

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
  const [subPage, setSubPage] = useState("dashboard");
  const ExampleCustomInput = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-primary" onClick={onClick}>
      {value}
    </button>
  );

  const returnDesk = async () => {
    setDesks(await ReservationService.getAllDesks());
  };
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const months = (date, NumberOfMonths) => {
    return date.setMonth(date.getMonth() + NumberOfMonths);
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

  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div
            className="row"
            style={
              subPage == "dashboard"
                ? { marginTop: "20px", marginBottom: "20px", height: "20vh" }
                : { marginTop: "20px", marginBottom: "20px", height: "20vh" }
            }
          >
            <div className="col-3">
              {subPage == "dashboard" ? (
                <FloorButton floorSend={setFloor} floor={selectedFloor} />
              ) : null}
            </div>
            <div className="col-6">
              <SwitchMultiButton
                value={subPage}
                setValue={setSubPage}
                buttons={[
                  {
                    text: "Dashboard",
                    value: "dashboard",
                  },
                  {
                    text: "Reservations",
                    value: "subPage",
                  },
                ]}
              />
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
                        minimumDate={new Date()}
                        maximumDate={months(new Date(), 2)}
                        filterDate={isWeekday}
                        customInput={<ExampleCustomInput />}
                      />
                    </div>
                  </div>

                  {subPage == "dashboard" ? (
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
                  ) : null}
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
