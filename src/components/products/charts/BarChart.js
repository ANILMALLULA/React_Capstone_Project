import React, { useEffect, useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

defaults.global.maintainAspectRatio = false;

const BarChart = () => {
  const products = useSelector((state) => state.products);
  const [topViewdCust, setTopViewedCust] = useState(0);
  const [productsSorted, setproductsSorted] = useState([]);
  const auth = useSelector((state) => state.users);

  const [data, setData] = useState({
    labels: ["something"],
    datasets: [
      {
        label: "Top Viewed Products",
        borderWidth: 1,
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    setTopViewedCust(products.length);
    setData({
      labels: productsSorted.map((product) => product.productName),
      datasets: [
        {
          label: "Top Viewed Products",
          data: productsSorted.map((product) => product.views),
          borderWidth: 1,
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
    // eslint-disable-next-line
  }, [productsSorted]);

  useEffect(() => {
    const list = products.products;
    let prodName = [];
    let views = [];
    let price = [];
    list.forEach((element) => {
      prodName.push(element.productName);
      views.push(element.views);
      price.push(element.productPrice);

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
    });
    setproductsSorted(
      products.products.sort((prod1, prod2) =>
        prod1.views > prod2.views ? -1 : prod1.views < prod2.views ? 1 : 0
      )
    );
    setTopViewedCust(products.length);
    // eslint-disable-next-line
  }, [products]);

  const handleOnChangeNum = (e) => {
    if (
      e.target.value === "" ||
      e.target.value > products.length ||
      e.target.value <= 0
    ) {
      setTopViewedCust(products.length);

      setproductsSorted(
        products.products.sort((prod1, prod2) =>
          prod1.views > prod2.views ? -1 : prod1.views < prod2.views ? 1 : 0
        )
      );
    } else {
      setTopViewedCust(e.target.value);
      setproductsSorted(
        products.products
          .sort((prod1, prod2) =>
            prod1.views > prod2.views ? -1 : prod1.views < prod2.views ? 1 : 0
          )
          .slice(0, e.target.value)
      );
    }
  };

  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
    title: {
      display: true,
      text: "Bar Chart",
      responsive: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 2,
          },
        },
      ],
    },
  };

  return auth.loginSuccess ? (
    <div className='text-center my-3'>
      <input
        type='number'
        onChange={handleOnChangeNum}
        className='form-control'
        style={{ width: "250px", margin: "20px auto" }}
      />
      <article className='canvas-container chart'>
        <Bar data={data} options={options} />
      </article>
    </div>
  ) : (
    <Redirect to='/login' />
  );
};

export default BarChart;
