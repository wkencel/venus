import React, { useState } from 'react'; 

    // declare a historical type of state inside the dynamic state
    // a state type within a state type
type dynamicState = {
  historical: {
    uptime: string,
    latency: number,
    load: string, 
    error: string, // potentially an int TBD.
  }[];
  // declare a function to set the historical array in context
  setHistorical: (input:any[]) => void;
};
// declare our future context as an object that contains an array filled with dummy data and a function to set that data
const histData: dynamicState= {
  historical: [
		{
		uptime: 'uptime1',
		latency: 20,
		load: 'string1', 
		error: 'string1', 
    },
    {
		uptime: 'uptime2',
		latency: 10,
		load: 'string', 
		error: 'string', 
	}
],
  setHistorical: () => {}
};

// create the historical context using React.create context on the historical data object we created
const historicalContext = React.createContext<dynamicState>(histData)

// declare the provider of our context that will give its state to the children components when we add it to our parent react component
const HistoricalProvider: React.FC = (props: any) => {
  // declare a hook in context that can be used to set the historical context array
  const [historical, setHistorical] = useState<any[]>([]);

  return <historicalContext.Provider value={{historical, setHistorical}}>{props.children}</historicalContext.Provider>

}

export { histData, historicalContext, HistoricalProvider}