import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import ReservationService from "../services/ReservationService";
import { Link } from "react-router-dom";

const Settings = (props) => {
  const user = props.user;
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [anonymReservation, setReservation] = useState(false);
  const [selectedDesk, setSelection] = useState();
  const [isSaveBtnVisible, setBtnVisible] = useState(false);
  const [reservationsByUser, setReservationsByUser] = useState(null);

  const returnUser = async () => {
    setUserData(await UserService.getUser(user.email));
  };

  const returnReservationInfo = async () => {
    setReservationsByUser(
      await ReservationService.getReservationInfoUserId(user.email)
    );
  };
  useEffect(() => {
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
    } else {
      console.log(reservationsByUser);
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
  };

  const deleteReservation = async (id) => {
    await ReservationService.deleteReservation(id);
    returnReservationInfo();
  };

  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "20px", justifySelf: "center" }}
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
              ) : null}
            </div>
            <div className="col-6" style={{ marginTop: "20px" }}>
              <h4 style={{ marginBottom: "20px" }}>My reservations</h4>
              {reservationsByUser.length !== 0 ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Desk ID</th>
                      <th>Date</th>
                      <th>Last modified</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservationsByUser.map((item) => (
                      <tr key={item.reservation.reservationId}>
                        <td>
                          <b>{item.deskId}</b>
                        </td>
                        <td>{item.reservation.date}</td>
                        <td>{item.reservation.updateTimeStamp}</td>
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
                              deleteReservation(item.reservation.reservationId)
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
      ) : null}
    </>
  );
};

export default Settings;
