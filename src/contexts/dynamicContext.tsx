import React, { useState } from 'react'; 
// refer to ./historicalContext for descriptive psuedocode
type dynamicState = {
  services: {
    service: string,
    // path: string,
    status: string,
    uptime: string, 
    latency: string, // potentially an int TBD.
    load: string, 
    error: string, 
  }[];
  setServices: (input:any[]) => void;
};

const servicesData: dynamicState= {
  services: [ 
    {
      service: 'Google Weather API from context',
      status: 'good',
      uptime: '98%',      
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Surfline API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Stripe API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Surfline API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Unemployment API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'AWS API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Codesmith API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
    },
    {
      service: 'Plaid API',
      status: 'good',
      uptime: "98%",
      latency: '300ms',
      load: '1000hpm',
      error: '2%'
      
    },
  ],
  setServices: () => {}
};

const dynamicContext = React.createContext<dynamicState>(servicesData)


function DynamicProvider(props: any):JSX.Element{
  
  const [services, setServices] = useState<any[]>([]);

  return <dynamicContext.Provider value={{services, setServices}}>{props.children}</dynamicContext.Provider>

}

export { DynamicProvider, dynamicContext, servicesData }