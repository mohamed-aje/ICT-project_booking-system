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
        //red, green
        backgroundColor: ["#ff5f8f", "#56ff4f"],
        borderColor: ["white", "white"],
        borderWidth: 2,
      },
    ],
  };
  return <Pie data={data} />;
};

export default Doughnut;
