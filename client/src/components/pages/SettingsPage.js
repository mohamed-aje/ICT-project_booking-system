import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";

const Settings = (props) => {
  const user = props.user;
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [anonymReservation, setReservation] = useState();
  const [selectedDesk, setSelection] = useState();

  useEffect(() => {
    const returnUser = async () => {
      setUserData(await UserService.getUser(user.email));
    };
    if (!userData) {
      returnUser();
    }
    userData ? setLoading(false) : setLoading(true);
    console.log(isLoading);
  }, [userData]);

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
                      value={anonymReservation}
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      I want my reservations to be anonym
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Settings;
