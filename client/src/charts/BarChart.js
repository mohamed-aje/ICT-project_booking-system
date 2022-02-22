import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";

const BarChart = (props) => {
  const [daysArray, setDaysArray] = useState([]);
  useEffect(() => {
    let mon = 0;
    let tue = 0;
    let wed = 0;
    let thu = 0;
    let fri = 0;
    props.reserv
      .filter((item) =>
        moment(item.reservations.createTimeStamp).isSame(moment(), "week")
      )
      .map((res) => {
        let day = new Date(res.reservations.createTimeStamp);
        console.log(day);
        day = day.toString().split(" ")[0];
        switch (day) {
          case "Mon":
            mon++;
            break;
          case "Tue":
            tue++;
            break;
          case "Wed":
            wed++;
            break;
          case "Thu":
            thu++;
            break;
          case "Fri":
            fri++;
            break;
          default:
            console.log("idi nahui");
        }
      });
    setDaysArray([mon, tue, wed, thu, fri]);
  }, [props]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reservations made last week",
      },
    },
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: daysArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
