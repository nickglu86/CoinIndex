import {createContext, useContext, useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import apiEndpoints from '../utils/ApiEndpoints';
import { mockData } from '../services/mockdata';


//Use MOCK data / false - will use Real Api's data
const USE_MOCK_DATA = false;

// The Context that will hold the data from API's
export const Context = createContext({});

export const DataProvider = ({ children }) => {
 
    const [apiData, setApiData] = useState();

    const [isLoading, setIsLoading] = useState(true);

    // Init the Context with MOCK DATA from ./mockdata/
    const initWithMockData = () => {
      mockData.cryptoNewsApi = !mockData.cryptoNewsApi.results.length ?
      mockData.cryptoNewsApiAlt : mockData.cryptoNewsApi;
      setApiData(mockData);
      setIsLoading(false);
    }

    // Init the Context  real data from API /utis/ApiEndpoints.js
     const  initDatafromAPIs =   () => {
      let endPointsDataRequests = apiEndpoints.map( resource => axios.get(resource.endpoint));
        
        Promise.all(endPointsDataRequests)
        .then(responses => {
          let data = {};
          console.log(responses);
          responses.forEach((response, index) => {
            if(apiEndpoints[index].type === 'youtube'){
              Object.assign(data.youtube, { [apiEndpoints[index].name] : response.data });
            } else {
              data[apiEndpoints[index].name] = response.data;
            }

          });

          // responses.forEach((response, index) => {
          //   const isYouTubeEndpoint =  endPointsDataRequests[index].type === 'youtube' ;
          //   isYouTubeEndpoint ?
          //   Object.assign(data.youtube, { [endPointsDataRequests[index].name] : response.data })
          //   : data[endPointsDataRequests[index].name] = response.data;
          // });

          console.log(data);
          data.cryptoNewsApi = !data.cryptoNewsApi.results.length ? data.cryptoNewsApiAlt : data.cryptoNewsApi;
          setApiData(data);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
      console.log('Data fetched from APIs!')
      USE_MOCK_DATA ? initWithMockData() : initDatafromAPIs();
    }, []);

    // Use useMemo to memoize apiData
    const memoizedApiData = useMemo(() => apiData, [apiData]);
  
    return (
      <Context.Provider value={{ apiData: memoizedApiData, isLoading }}  >
        {children}
      </Context.Provider>
    );
  };

export function DataContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
