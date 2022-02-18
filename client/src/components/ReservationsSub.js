import React from "react";

const ReservationsSubpage = (props) => {
  const selectedDate = props.selectedDate;
  const numOfAllDesks = props.numOfAllDesks;
  const occupiedDesksCount = props.occupiedDesksCount;

  //here useeffect that retrieves the reservations using URL (http://localhost:8080/reservations/getAllForAll)
  return (
    <div>
      <p>
        Hello on reservations subpage. {occupiedDesksCount} desks are occupied
        out of {numOfAllDesks} for date {selectedDate.toLocaleDateString()}
      </p>
    </div>
  );
};
export default ReservationsSubpage;
