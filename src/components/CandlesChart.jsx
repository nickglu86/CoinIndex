
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const CandlesChart = ({coin}) => {
    const [data, setData] = useState([]);

    const coinEndPoint = "https://api.coingecko.com/api/v3/coins/" +  coin.id + "/ohlc?vs_currency=usd&days=7";
    const apexChartOptions = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: coin.name + ' Last 7 Days Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }
    const apexChartObj = {
        series: [{
            data: data
        }],
        options: apexChartOptions
    }
    const getData = async () => {
      const { data } = await axios.get(coinEndPoint);
      setData(data);
    };

    useEffect(() => {
      getData();
    }, []);


        return (
            <div id="chart">
            <ReactApexChart options={apexChartObj.options} series={apexChartObj.series} type="candlestick" height={350} />
            </div>
        );
}


export default CandlesChart;

