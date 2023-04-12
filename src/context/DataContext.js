import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import dataResources from '../utils/dataResources';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
        let promises = dataResources.map(resource => axios.get(resource.endpoint));
        
        Promise.all(promises)
          .then(responses => {
            let data = {};
            responses.forEach((response, index) => {
              data[dataResources[index].name] = response.data;
            });
            setApiData(data);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      }, []);
 
  
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