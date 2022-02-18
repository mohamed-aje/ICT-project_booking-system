import React, { useState } from "react";
const FloorButton = ({ floorSend, ...props }) => {
  const [selectedFloor, setFloor] = useState(props.floor);
  const changeFloor = (floor) => {
    setFloor(floor);
    floorSend(floor);
  };
  return (
    <div
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
          className={selectedFloor === 1 ? "floorBtn selected" : "floorBtn"}
          onClick={() => changeFloor(1)}
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
          className={selectedFloor === 2 ? "floorBtn selected" : "floorBtn"}
          onClick={() => changeFloor(2)}
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
          <div className="selectedbox">
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
    </div>
  );
};
export default FloorButton;
