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
  const selectedDate = props.selectedDate;
  const [daysArray, setDaysArray] = useState([]);

  useEffect(() => {
    let week = moment(selectedDate).week();
    console.log(week);

    let mon = 0;
    let tue = 0;
    let wed = 0;
    let thu = 0;
    let fri = 0;

    props.reserv
      .filter((item) => moment(item.reservations.date).week() == week)
      .map((item) => {
        let date = new Date(item.reservations.date);
        let day = date.toString().split(" ")[0];
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
    Tooltip
    //Legend
  );
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      labels: {
        // This more specific font property overrides the global property
        font: {
          weight: "bold",
        },
      },
      title: {
        display: true,
        text: "Reservations made on the week of selected date",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        minBarLength: 5,
        label: "reservations per day",
        data: daysArray,
        backgroundColor: labels.map((day) =>
          day != selectedDate.toString().split(" ")[0]
            ? "rgba(255, 99, 132, 0.2)"
            : "#f0869f"
        ),
      },
    ],
  };
  console.log(data);
  return <Bar options={options} data={data} />;
};

export default BarChart;
