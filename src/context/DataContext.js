import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
// import apiEndpoints from '../data/ApiEndpoints';
import { news } from '../mockdata/news';
import { newsAlternative } from '../mockdata/newsAlternative';
import { coins } from '../mockdata/coins';
import {trending} from '../mockdata/trending'
import { globaldata } from '../mockdata/globaldata';
import {exchanges} from '../mockdata/exchanges'
import { fearAndGreed } from '../mockdata/fearAndGreed';
import { btc } from '../mockdata/btc';
import { youtube } from '../mockdata/youtube';

export const apiEndpoints = [
  {
    name: `cryptoNewsApi`,
    endpoint: `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&q=cryptopotato&language=en`,
    type: `news`,
  },
  {
    name: "cryptoNewsApiAlt",
    endpoint:
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&q=cointelegraph&language=en`,
    type: "news",
  },
  {
    name: `coins`,
    endpoint: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C30d&locale=en`,
    type: `coins`,
  },
  {
    name: `btc`,
    endpoint: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    type: `btc`,
  },
  {
    name: `trending`,
    endpoint: `https://api.coingecko.com/api/v3/search/trending`,
    type: `trending`,
  },
  {
    name: `fearAndGreed`,
    endpoint: `https://api.alternative.me/fng/?limit=14`,
    type: `fearAndGreed`,
  },
  {
    name: `globalData`,
    endpoint: `https://api.coingecko.com/api/v3/global`,
    type: `globalData`,
  },
  {
    name: `exchanges`,
    endpoint: `https://api.coingecko.com/api/v3/exchanges?per_page=100`,
    type: `exchanges`,
  },
  // {
  //   name: `copinBerau`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCqK_GSMbpiV8spgD3ZGloSw&part=snippet&maxResults=1&order=date&type=video`,
  //   type: `youtube`,
  // },
  // {
  //   name: `dataDash`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCCatR7nWbYrkVXdxXb4cGXw&part=snippet&maxResults=3&order=date&type=video`,
  //   type: `youtube`,
  // },
  // {
  //   name: `camerFous`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCwGflGmzevf4fcm-z8E-twA&part=snippet&maxResults=3&order=date&type=video`,
  //   type: `youtube`,
  // },
];

 

// MOCK API's Data
const mockData = {
  cryptoNewsApi : news,
  cryptoNewsApiAlt: newsAlternative,
  coins: coins,
  btc: btc,
  trending: trending,
  fearAndGreed: fearAndGreed,
  globalData: globaldata,
  exchanges: exchanges,
  youtube: youtube
};

//Use MOCK data / false - will use Real Api's data
const USE_MOCK_DATA = false;

// The Context that will hold the data from API's
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
 
    const [apiData, setApiData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    // Init the Context with MOCK DATA from ./mockdata/
    const initWithMockData = () => {
      console.log('initWithMockData');
      mockData.cryptoNewsApi = !mockData.cryptoNewsApi.results.length ?
      mockData.cryptoNewsApiAlt : mockData.cryptoNewsApi;
      setApiData(mockData);
      setIsLoading(false);
    }

    // Init the Context  real data from API /utis/ApiEndpoints.js
    const initDatafromAPIs = async () => {
      console.log('initDatafromAPIs');
      let endPointsDataRequests =  apiEndpoints.map(
        resource =>   axios.get(resource.endpoint),
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          }
        }
      );
        
      Promise.allSettled(endPointsDataRequests)
        .then(responses => {
          let data = {
            cryptoNewsApi : responses[0],
            cryptoNewsApiAlt: responses[1],
            coins: responses[2],
            btc: responses[3],
            trending: responses[4],
            fearAndGreed: responses[5],
            globalData: responses[6],
            exchanges: responses[7]
          };
          
          // let objKeys = Object.keys(data)
          // responses.forEach((response, index) => {
          //   console.log(objKeys[index]);
          // data[]  = response.data;

          // });

          
          // console.log(data);
          // data.cryptoNewsApi = !data.cryptoNewsApi.results.length ? data.cryptoNewsApiAlt : data.cryptoNewsApi;
          setApiData(data);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
      console.log('useEffect' );
      USE_MOCK_DATA ? initWithMockData() : initDatafromAPIs();
    },
     []);
 
  
    return (
      <DataContext.Provider value={{ apiData, isLoading }}  >
        {children}
      </DataContext.Provider>
    );
  };

  export function useAPI() {
    const context = useContext(DataContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }