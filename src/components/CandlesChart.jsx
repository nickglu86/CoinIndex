
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const CandlesChart = ({coin, timeframe, customTitle}) => {
    const [data, setData] = useState([]);

    const coinEndPoint = `https://api.coingecko.com/api/v3/coins/${coin.id}/ohlc?vs_currency=usd&days=${timeframe}`;
    const candlesChartTitle = customTitle ? customTitle : `${coin.name} -  Last ${ timeframe === 1 ? '24 Hours': timeframe + ' Days Chart'}`;

    const apexChartOptions = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: candlesChartTitle,
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
            <div className={`candles-chart-${timeframe}d`}>
            <ReactApexChart options={apexChartObj.options} series={apexChartObj.series} type="candlestick" height={320} />
            </div>
        );
}


export default CandlesChart;

