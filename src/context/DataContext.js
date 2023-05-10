import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
//API Resources
import dataResources from "../utils/dataResources";
//MockData Resources
import { news } from "../mockdata/news";
import { coins } from "../mockdata/coins";
import { trending } from "../mockdata/trending";
import { globaldata } from "../mockdata/globaldata";
import { exchanges } from "../mockdata/exchanges";
import { fearAndGreed } from "../mockdata/fearAndGreed";
import { btc } from "../mockdata/btc";
import { youtube } from "../mockdata/youtube";

// Set to true to use mock data
const USE_MOCK_DATA = false;

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (USE_MOCK_DATA) {
      let data = {
        cryptoNewsApi: news,
        coins: coins,
        btc: btc,
        trending: trending,
        fearAndGreed: fearAndGreed,
        globalData: globaldata,
        exchanges: exchanges,
        youtube: youtube,
      };
      setApiData(data);
      setIsLoading(false);
    } else {
      let endPointsDataRequests = dataResources.map((resource) =>
        axios.get(resource.endpoint)
      );
      Promise.all(endPointsDataRequests)
        .then((responses) => {
          let data = {};
          data.youtube = {};
          responses.forEach((response, index) => {
            if (dataResources[index].type === "youtube") {
              Object.assign(data.youtube, {
                [dataResources[index].name]: response.data,
              });
            } else {
              data[dataResources[index].name] = response.data;
            }
          });
          setApiData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <DataContext.Provider value={{ apiData, isLoading }}>
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
