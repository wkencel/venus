/**
 * @name MainDisplay
 * @desc Highest component in hierarchy that displays both Navigation Bar and Dashboard
 **/

//imports to be used in file
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Navbar';
import Dashboard from './Dashboard';
import {Router, Route, Link, Switch } from 'react-router-dom';


export default function  MainDisplay(): JSX.Element{
return(
    <div id="mainDisplay">
    {/* <Router> */}
    {/* <Switch> */}
    <NavBar />
    <Dashboard />
    {/* </Switch> */}
    {/* </Router> */}
    </div>
  )
}

//add any bindings here

//add any methods here

//add axios

