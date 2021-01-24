import React, { useState } from 'react'; 

// type dynamicState = {
//   services: {
//     host: string,
//     port: string,
//     path: string, 
//     date: string, // potentially an int TBD.
//     statusCode: number, 
//     latency: number, 
//   }[];
//   setServices: (input:any[]) => void;
// };


type dynamicState = {
  services: { 
    status: string,
    service: string,
    load: string,
    response_time: number, 
    error: number,
   availability: number,
   key?: number,
  }[],
  aggregate: {
    status: string,
    load: string,
    response_time: number, 
    error: number,
    availability: number,
  };
  setServices: (input:any[]) => void;
  setAggregate: (input:any) => void;
};

export const liveData: dynamicState = {
  services: [
    {
      status: 'good',
      service: 'curriculum-api.codesmith.io',
      load: '0.6666666865348816hpm',
      response_time: 1266,
      error: 50,
      availability: 100
    },
    {
      status: 'good',
      service: 'finance.yahoo.com',
      load: '0.6666666865348816hpm',
      response_time: 1417.5,
      error: 50,
      availability: 100
    },
    {
      status: 'good',
      service: 'weather.google.com',
      load: '0.6666666865348816hpm',
      response_time: 1150,
      error: 0,
      availability: 50
    }
  ],
  aggregate: {
    error: 40,
    response_time: 1278,
    load: '2hpm',
    availability: 83,
    status: 'good'
  },
  setServices: () => {},
  setAggregate: () => {}
};

export const dynamicContext = React.createContext<dynamicState>(liveData)

export const DynamicProvider: React.FC = (props: any) => {
  
  const [services, setServices] = useState<any[]>([]);
  const [aggregate, setAggregate] = useState<any>({});

return <dynamicContext.Provider value={{services, setServices, aggregate, setAggregate}}>{props.children}</dynamicContext.Provider>

}