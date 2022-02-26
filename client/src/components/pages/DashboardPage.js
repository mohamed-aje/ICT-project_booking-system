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
import ReservationsSub from "../ReservationSub";
import ReactTooltip from "react-tooltip";

const DashboardPage = (props) => {
  const user = props.user;
  const account = user.email;
  const [isLoading, setLoading] = useState(true);

  const [selectedDate, onChange] = useState(new Date());
  const [selectedDesk, setSelection] = useState(0);

  const [isOccupied, setOccupied] = useState(false);
  const [oneDeskIsBookedForDate, setBookedForDate] = useState();
  const [selectedFloor, setFloor] = useState(1);
  const [desks, setDesks] = useState(null);
  const [deskCountByFloors, setCount] = useState(0);
  const [reservationsData, setReservationsData] = useState();

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
  const months = (date, numOfmonths) => {
    return date.setMonth(date.getMonth() + numOfmonths);
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
      account
    );
    returnDesk();
    setSelection(0);
  };

  const getReservedDesks = () => {
    setBookedForDate(false);
    let occupiedDesksData = [];
    let index = 0;
    let firstFloorDesksCount = 0;
    desks.map((desk) => {
      if (desk.floor == 1) {
        firstFloorDesksCount++;
      }
      if (desk.reservations.length !== 0) {
        let reservationForSelectedDate = desk.reservations.filter(
          (reservation) =>
            reservation.date ==
            selectedDate.toLocaleDateString().split("/").reverse().join("-")
        )[0];
        if (reservationForSelectedDate) {
          let deskId = desk.deskId;
          let floor = desk.floor;
          let user;

          if (reservationForSelectedDate.user.account == account) {
            user = "My reservation";
            setBookedForDate(true);
          } else if (!reservationForSelectedDate.user.anonymReservations) {
            user = [
              reservationForSelectedDate.user.firstName,
              reservationForSelectedDate.user.lastName,
            ].join(" ");
          }
          occupiedDesksData[index] = { deskId, floor, user };
          index++;
        } else if (selectedDesk == desk.deskId) {
          setOccupied(false);
        }
      }
    });
    let secondFloorDesksCount = desks.length - firstFloorDesksCount;
    setCount(firstFloorDesksCount, secondFloorDesksCount);
    setReservationsData(occupiedDesksData);
    getDeskStyles(occupiedDesksData);
  };

  const getDeskStyles = (occupiedDesksData) => {
    setData([]);
    setOccupied(false);

    let floorDataWithStyles;
    if (selectedFloor === 1) {
      //to be replaced with fifth floor data
      floorDataWithStyles = floorFiveData;
    } else {
      floorDataWithStyles = floorSixData;
    }
    floorDataWithStyles.map((desk) => {
      let obj = desk;
      let deskData = occupiedDesksData.filter(
        (deskData) => deskData.deskId == obj.id
      )[0];
      //console.log(deskData);
      if (deskData) {
        if (deskData.deskId == selectedDesk) {
          setOccupied(true);
        }
        obj.style = "occupied";
        obj.user = deskData.user;
      } else {
        obj.style = "free";
        obj.user = null;
      }
      setData((floorData) => [...floorData, obj]);
    });
  };

  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div
            className="row"
            style={
              subPage == "dashboard"
                ? { marginTop: "20px", marginBottom: "20px", height: "18vh" }
                : { marginTop: "20px", marginBottom: "20px", height: "10vh" }
            }
          >
            <div className="col-3">
              {subPage == "dashboard" ? (
                <FloorButton floorSend={setFloor} floor={selectedFloor} />
              ) : null}
            </div>
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <SwitchMultiButton
                  value={subPage} // set as default button
                  setValue={setSubPage}
                  buttons={[
                    {
                      text: "Dashboard",
                      value: "dashboard",
                    },
                    {
                      text: "Reservations",
                      value: "reservations",
                    },
                  ]}
                />
              </div>
              {oneDeskIsBookedForDate && subPage == "dashboard" ? (
                <div
                  style={{ textAlign: "center" }}
                  class="alert alert-warning"
                  style={{ marginTop: "10px", width: "fit-content" }}
                  role="alert"
                >
                  You have a reservation for selected date.
                </div>
              ) : null}
            </div>
            <div
              className="col-3"
              style={{
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
                <div className="col-6">
                  {subPage == "dashboard" ? (
                    <div className="flexColumnFlexEndAlign">
                      <b style={{ color: "#02305a" }}>Selected desk: </b>
                      {selectedDesk !== 0 ? (
                        <>
                          <div className="desknumberbox">
                            <p>{selectedDesk}</p>
                          </div>
                          {isOccupied ? (
                            <p style={{ color: "#f0869f" }}>
                              <b>Occupied</b>
                            </p>
                          ) : (
                            <p style={{ color: "#9df05d" }}>
                              <b>Available</b>
                            </p>
                          )}
                        </>
                      ) : (
                        <p style={{ fontSize: "13px" }}>No desk selected</p>
                      )}
                    </div>
                  ) : null}
                </div>
                <div
                  className="col-6 flexColumnFlexEndAlign"
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <div className="flexColumnFlexEndAlign">
                    <b style={{ color: "#02305a" }}>Selected date:</b>
                    <div>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => onChange(date)}
                        minDate={new Date()}
                        maxDate={months(new Date(), 6)}
                        filterDate={isWeekday}
                        customInput={<ExampleCustomInput />}
                      />
                    </div>
                  </div>

                  {subPage == "dashboard" ? (
                    <div
                      style={{
                        display: "flex",
                        alignSelf: "flex-end",
                        paddingBottom: "10px",
                      }}
                    >
                      <button
                        disabled={
                          isOccupied ||
                          !selectedDesk ||
                          oneDeskIsBookedForDate ||
                          !isWeekday(selectedDate)
                        }
                        type="button"
                        className="btn btn-primary"
                        onClick={() => saveReservation()}
                      >
                        Book desk
                      </button>
                    </div>
                  ) : null}
                </div>
                <ReactTooltip
                  id="user"
                  place="right"
                  type="dark"
                  effect="solid"
                  multiline={false}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-12"
              style={{
                marginTop: "20px",

                height: "60vh",
                alignItems: "center",
              }}
            >
              {subPage == "dashboard" ? (
                selectedFloor == 2 ? (
                  <FloorSixLayout
                    setSelectedDeskID={setSelection}
                    floorSixData={floorData}
                    selectedDesk={selectedDesk}
                  />
                ) : (
                  <FloorFiveLayout
                    floorFiveData={floorData}
                    setSelectedDeskID={setSelection}
                    selectedDesk={selectedDesk}
                  />
                )
              ) : (
                <ReservationsSub
                  selectedDate={selectedDate}
                  reservationsForDate={reservationsData}
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
