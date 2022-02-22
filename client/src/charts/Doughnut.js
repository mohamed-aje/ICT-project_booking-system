import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const Doughnut = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Reserved", "Free"],
    datasets: [
      {
        label: "Booking",
        data: [props.reserv.length, 87 - props.reserv.length],
        backgroundColor: ["red", "green"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};

export default Doughnut;
