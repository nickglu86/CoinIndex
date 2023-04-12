import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';
import dataResources from '../utils/dataResources';

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [apiDta, setApiDta] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    let dataResourcesLenght = Object.keys(dataResources).length;

    
    const getAPIsData = () => {
        Promise.all(Object.keys(dataResources).forEach(
           (key) => axios.get(dataResources[key].endpoint)))
           .then(
             ([ 
               {data: cryptoNewsApi}, {data: coins} 
             ]) => { setApiDta({cryptoNewsApi, coins})}
           )
           .finally(() => {
            setIsLoading(true);
           });
       }

    useEffect(() => { 
    //   getAPIsData();
        let obj = {}
   
        Object.keys(dataResources).forEach(key => {
            axios.get(dataResources[key].endpoint)
            .then(
                response => {
                   obj[dataResources[key].name] =  response.data;
                
                }
            )
            .catch((error) => console.log(error));
          });
          setApiDta(obj);
          setIsLoading(true);

    }, [])
 
  
    return (
      <DataContext.Provider value={{ apiDta, isLoading }}  >
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