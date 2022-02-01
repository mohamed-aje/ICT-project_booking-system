import React, { Component } from "react";
import Login from "../Login.js";
import { useNavigate, useParams } from "react-router-dom";
function DashboardPage() {
  const { username } = useParams();
  return (
    <div className="container">
      <p>Welcome {username}</p>
    </div>
  );
}

export default DashboardPage;
