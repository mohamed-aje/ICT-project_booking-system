import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Settings = () => {
  const { username } = useParams();
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-6">
          <h2>Profile</h2>
          <h4>{username}</h4>
        </div>
        <div>
          <p>
            <b>Account:</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
