import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import ReservationService from "../services/ReservationService";
import { Link } from "react-router-dom";
import "../styles/ReservationSub.css";
const Settings = (props) => {
  const user = props.user;
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [anonymReservation, setReservation] = useState(false);
  const [isSaveBtnVisible, setBtnVisible] = useState(false);
  const [reservationsByUser, setReservationsByUser] = useState(null);
  const [successMessage, setSuccesMessage] = useState();

  const returnUser = async () => {
    setUserData(await UserService.getUser(user.email));
  };

  const returnReservationInfo = async () => {
    setReservationsByUser(
      await ReservationService.getReservationInfoUserId(user.email)
    );
  };
  useEffect(() => {
    console.log(new Date());
    if (userData) {
      setLoading(false);
      setReservation(userData.anonymReservations);
    } else {
      setLoading(true);
    }

    if (!userData) {
      returnUser();
    }

    if (!reservationsByUser) {
      returnReservationInfo();
      setLoading(true);
    }
  }, [userData, reservationsByUser]);

  const changeState = () => {
    if (!anonymReservation) {
      setReservation(true);
    } else {
      setReservation(false);
    }
    setBtnVisible(true);
  };

  const saveSetting = () => {
    console.log(anonymReservation);
    const saveAnonimityChange = async () => {
      await UserService.saveAnonymitySetting(user.email, anonymReservation);
    };
    saveAnonimityChange();
    setBtnVisible(false);
    setSuccesMessage(
      <div
        class="alert alert-success"
        style={{ marginTop: "10px", width: "fit-content" }}
        role="alert"
      >
        Latest change has been successfully saved!
      </div>
    );
  };

  const deleteReservation = async (id) => {
    await ReservationService.deleteReservation(id);
    returnReservationInfo();
  };

  return (
    <>
      {!isLoading ? (
        <div className="container" style={{ height: "90%" }}>
          <div
            className="row"
            style={{ marginTop: "50px", justifySelf: "center" }}
          >
            <div className="col-6">
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: "5px",
                  width: "fit-content",
                  padding: "25px 25px 25px 20px",
                }}
              >
                <h2 style={{ marginBottom: "20px" }}>Profile</h2>
                <h4>
                  {userData.firstName} {userData.lastName}
                </h4>
                <div style={{ marginBottom: "40px" }}>
                  <p>
                    <b>Account: </b>
                    {userData.account}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Reservation related settings</b>
                  </p>
                  <div className="form-check" style={{ marginBottom: "20px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={changeState}
                      id="defaultCheck1"
                      checked={anonymReservation}
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      I want my reservations to be anonym
                    </label>
                  </div>
                </div>
              </div>
              {isSaveBtnVisible ? (
                <div style={{ marginTop: "20px" }}>
                  <button
                    disabled={!isSaveBtnVisible}
                    type="button"
                    className="btn btn-primary"
                    onClick={() => saveSetting()}
                  >
                    Save setting
                  </button>
                </div>
              ) : (
                successMessage
              )}
            </div>
            <div
              className="col-6"
              style={{
                marginTop: "20px",
              }}
            >
              <h4 style={{ marginBottom: "20px" }}>My upcoming reservations</h4>
              <div style={{ overflow: "auto", maxHeight: "80%" }}>
                {reservationsByUser.length !== 0 ? (
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th
                          style={{
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#02305a",
                          }}
                        >
                          Desk ID
                        </th>
                        <th
                          style={{
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#02305a",
                          }}
                        >
                          Date
                        </th>
                        <th
                          style={{
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#02305a",
                          }}
                        >
                          Last modified
                        </th>
                        <th
                          style={{
                            position: "sticky",
                            top: "0",
                            backgroundColor: "#02305a",
                          }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservationsByUser
                        .filter(
                          (item) =>
                            new Date()
                              .toLocaleDateString()
                              .split("/")
                              .reverse()
                              .join("-") <= item.reservations.date
                        )
                        .map((item) => (
                          <tr key={item.desk_id}>
                            <td>
                              <b>{item.desk_id}</b>
                            </td>
                            <td>{item.reservations.date}</td>
                            <td>{item.reservations.updateTimeStamp}</td>
                            <td>
                              {/*                           <Link
                            className="btn btn-info"
                            style={{
                              backgroundColor: "#00a4ff",
                              color: "white",
                            }}
                            to={``}
                          >
                            Update
                          </Link> */}
                              <button
                                className="btn btn-danger"
                                style={{
                                  marginLeft: "10px",
                                }}
                                onClick={() =>
                                  deleteReservation(
                                    item.reservations.reservationId
                                  )
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No reservations found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Settings;
