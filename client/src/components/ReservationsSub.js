import React from "react";

const ReservationsSub = () => {
  const selectedDate = props.selectedDate;
  const numberOfDesks = props.numberOfDesks;
  const numOfOccupiedDesks = props.numOfOccupiedDesks;
  return (
    <div>
      <tr key={reservation_id}>
        <td>{date}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{desk_id}</td>

        <td>
          <button>Edit</button>
        </td>
      </tr>{" "}
    </div>
  );
};
export default ReservationsSub;
