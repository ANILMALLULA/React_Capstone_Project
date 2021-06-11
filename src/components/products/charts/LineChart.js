import React, { useEffect, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import { useSelector } from "react-redux";

defaults.global.maintainAspectRatio = false;

const LineChart = () => {
  const [Data, setData] = useState({});
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const list = products.products;
    let prodName = [];
    let views = [];
    let price = [];
    list.forEach((element) => {
      prodName.push(element.productName);
      views.push(element.views);
      price.push(element.productPrice);
    });
    setData({
      labels: prodName,
      datasets: [
        {
          label: "Total number of views",
          data: views,
          backgroundColor: [
            "rgba(255,105,145,0.6)",
            "rgba(155,100,210,0.6)",
            "rgba(90,178,255,0.6)",
            "rgba(240,134,67,0.6)",
            "rgba(120,120,120,0.6)",
            "rgba(250,55,197,0.6)",
          ],
        },
      ],
    });
  }, [products]);
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 5,
          },
        },
      ],
    },
  };
  return (
    <article className='canvas-container chart'>
      <Line data={Data} options={options} />
    </article>
  );
};

export default LineChart;
