
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import useFetchData from "../../utils/useFetchData";
 

 
const CandlesChartHook = ({coin}) => {
    const coinEndPoint = "https://api.coingecko.com/api/v3/coins/" +  coin.id + "/ohlc?vs_currency=usd&days=7";
    const apexChartOptions = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
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
    const {
        data,
        loading,
      } = useFetchData(coinEndPoint);   


    let apexChartObj = {
        series: [{
            data: data
        }],
        options: apexChartOptions
    }
        return (
            <div id="chart">
     
            { !loading && <ReactApexChart options={apexChartObj.options} series={apexChartObj.series} type="candlestick" height={350} /> } 
            </div>
        );
}


export default CandlesChartHook;

