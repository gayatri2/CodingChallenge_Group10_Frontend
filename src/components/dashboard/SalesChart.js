import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()
const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#FF0000"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "30%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "2022",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "2022",
      data: [10, 20, 10, 10, 20, 25, 10, 5, 20],
    },
  ];

  return (
    <div data-aos="zoom-in"  data-aos-duration="1500">
    <Card>
      <CardBody>
        <CardTitle tag="h5">Security Status Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Security Status Report
        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
    </div>
  );
};

export default SalesChart;
