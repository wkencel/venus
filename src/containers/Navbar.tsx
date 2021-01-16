/**
 * @name NavBar
 * @desc Left-hand side of Main Display. Displays Navigation Bar
 */

import React, { Component } from 'react';
import TabContainer from './TabContainer'
// import Tab from '../components/Tab'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function  NavBar(): JSX.Element {
  return (
    // React Router boilerplate code
    <div className="container-fluid">
      <Router>
        <div className="row ml-3">
          <ul className="list-inline">
            <li className="customLink list-inline-item brand mr-3">VENUS NOIR beta™</li>
            <li className="list-inline-item mr-3">
              <Link className="customLink" to="/">
                REAL-TIME
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="customLink" to="/historical">
                HISTORICAL
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="customLink" to="/dependency">
                DEPENDENCIES
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={TabContainer} />
            <Route path="/historical" component={TabContainer} />
            <Route path="/dependency" component={TabContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
//   return(
    
//   <Switch>
//     <Route exact path='/'>
//       <div>
//         <h2> Analytics</h2>
//         <Link to='/'><button className="btn">Real Time</button></Link>
//         <Link to='/historical'><button className="btn">Historical</button></Link>
//         <Link to='/dependency'><button className="btn">Dependencies</button></Link>
//       </div>
//     </Route>

//     <Route path='/realtime'>
//       <div>
//         <RealTimePage/>
//       </div>
//     </Route>

//     {/* <Route exact path="/" component={container} />
//       <div>

// // render route for historical data service A here

//       </div>
//     </Route>

//     <Route path='/dependency'>
//       <div>
//         {/* <DependencyPage/> 
//         <Route />
//         */}
    
    
    
//   </Switch>
  
  
//     <div>
//     <TabContainer />
//     </div>
//   ) 
//  }

 // exports to containers/MainContainer