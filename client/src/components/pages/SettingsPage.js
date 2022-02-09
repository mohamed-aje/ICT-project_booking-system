import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";

const Settings = (props) => {
  const user = props.user;
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [anonymReservation, setReservation] = useState(false);
  const [selectedDesk, setSelection] = useState();
  const [isSaveBtnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const returnUser = async () => {
      setUserData(await UserService.getUser(user.email));
    };
    if (!userData) {
      returnUser();
    }
    if (userData) {
      setLoading(false);
      setReservation(userData.anonymReservations);
    } else {
      setLoading(true);
    }
    console.log(isLoading);
  }, [userData]);

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
  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div className="row" style={{ marginTop: "20px" }}>
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Settings;
