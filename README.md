

# Venus

#
![Build Passing](https://img.shields.io/badge/build-passing-blue)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/venus)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Release: 5.1](https://img.shields.io/badge/Release-v1.0-orange)

A self-hosted service monitoring tool for growing projects. 

### ⭐ Star us on GitHub — it helps! ⭐


Venus is a self-hosted service monitoring tool for growing projects.  Venus provides real time and historic data metrics of your services and their endpoint methods. Use Venus to verify that these services and their endpoint dependencies are operating properly.

<br>

## Table of Contents

- [Description](#description)
- [Motivation](#motivation)
- [Features](#features)
- [A Brief Overview of Venus](#A-Brief-Overview-of-the-Venus-Orbit)
- [Demo](#demo)
- [Installation](#installation)
    - [Pre-Installation](#pre-installation)
    - [Install Dependencies](#install-dependencies)
    - [Configure Chronos](#configure-chronos)
    - [Initialize Chronos](#initialize-chronos)
    - [Docker Configuration](#docker-configuration)
- [Branches](#branches)
    - [Master](#master-branch)
      - [Examples](#examples)
        - [Microservices](#microservices)
        - [Docker](#docker)
    - [Middleware](#middleware-branch)
- [Technologies](#technologies)
- [License](#license)

#
#### [Return to Top](#Venus)

<br>

## Description

Venus is a lightweight, self-hosted service monitoring tool that provides customizable, real-time and historical data on critical health metrics of service dependencies.

<br>

## Motivation

As architectures shift more towards distributed and cloud based systems, the need for centralized and singular source of truth of end point services has grown in value. While many of these services exist as large packages, Venus aims to give users a flexible suite of baseline statistics on their deployed apps. 

<br>

## Features
* Real-time rolling averages on service specific KPIs including Availability, Response Time, Load, and Response Error.
* Service specific KPI threshold settings for quick glance report cards.
* Historic panel data on KPI statistics for Past Hour, Past Day, Past Week, Past Month intervals.
* Real-time dependency graph visualizer that maps service structure and statistics. 
* Server side authentication for secure storage and distribution of analytics. 
* Secure Session authentication.

<br>

## A Brief Overview of the Venus Orbit 

-- Insert flow chart of data. 


There are three key phases of The Venus Orbit:
1. Collecting your data: 
  - When deploying instances of their app, users will require in a Node.js wrapper that intercepts and logs all HTTP/HTTPS requests to external service dependencies. Each wrapper is configured to write these logs to an AWS Elasticache hosted Redis Cluster in a readable stream. The Redis cluster serves as a secure temporary storage for the raw log data, following LRU queue/cache protocols. 
2. Analyzing your data: 
 - The Redis Cluster stream is connected to a EC2 instance of the Venus client in a pub/sub relationship. At a set interval, the Venus client reads from the stream and pipes the relevant data to Danfo.js for vectorized calculations. After appending the new log informations for the services to the rolling average of the services, the information is sent via websocket to the Electron user interface for visualization. 
 - Historic panel data and analysis for the services are generated by cascading tables that populate via internal thresholding. They are directed to the frontend interface via a RESTful Venus API. 
 3. Viewing your Data: 
 - To access this information, a user must launch a local version of the Venus Electron GUI. Upon load, users will be prompted to enter the full server address of their EC2 Venus instance and their secret. If the secret and server address are valid and pass a tokenization process the user gains access to the analytics dashboard. With an access token, a websocket connection is established between the EC2 and the GUI and historic data is automatically fetched from the API at the aggregate level. 
 - Service specific analytics will populate the dashboard and will continue to give users updates on their server until they end their session by navigating to the Sign Out tab. A signout wipes all session data and returns users to the Venus login page.   



## Demo

insert demo here

<br>

# Getting Started With Venus 
1. 

<br>

## Configuring the Agent with Node.js and AWS Elasticache.

```
git clone https://github.com/oslabs-beta/venus.git
```

<br>

## Spinning up the Venus Electron Interface

Within the Venus parent directory:
```
npm install
```
run 
```
npm run dev:react
```
then run
```
npm run dev:electron
```

<br>

## Technical Overview
- <a href="#"><img src="./src/assets/electron-logo-color.png" alt="Electron" title="Electron" align="center" height="30" /></a>

- <a href="#"><img src="./src/assets/ts-logo-long-blue.png" alt="TypeScript" title="TypeScript" align="center" height="30" /></a>

- <a href="#"><img src="./src/assets/js-logo-color.png" alt="JavaScript" title="JavaScript" align="center" height="30" /></a>

- <a href="#"><img src="./src/assets/react-logo-color.png" alt="React" title="React" align="center" height="30" /></a>
  * React Router
  * React Context API/ React Hooks

- <a href="#"><img src="./src/assets/aws-logo-color.png" alt="AWS" title="AWS" align="center" height="30" /></a> 
  * Elasticache
  * EC2
  * RDS)

- <a href="#"><img src="./src/assets/postgres-logo-color.png" alt="PostgreSQL" title="PostgreSQL" align="center" height="30" /></a>

- <a href="#"><img src="./src/assets/Redis_Logo.svg.png" alt="Redis" title="Redis" align="center" height="30" /></a> 

- <a href="#"><img src="./src/assets/websockets-logo.png" alt="Websockets" title="Websockets" align="center" height="30" /></a> 

- <a href="#"><img src="./src/assets/danfo-js-logo.png" alt="Danfo.js" title="Danfo.js" align="center" height="25" /></a> 

- <a href="#"><img src="./src/assets/express-logo-color.png" alt="Express" title="Express" align="center" height="30" /></a> 

- <a href="#"><img src="./src/assets/antdesign-logo.png" alt="antDesign" title="Express" align="center" height="30" />  Ant Design</a> 
  - Ant Design Charting Libraries 

- <a href="#"><img src="./src/assets/Visx-D3-React-logo.jpeg" alt="Express" title="Express" align="center" height="35" /></a>  

- <a href="#"><img src="./src/assets/jest-logo-color.png" alt="PostgreSQL" title="PostgreSQL" align="center" height="25" /></a> / <a href="#"><img src="./src/assets/enzyme-logo-color.png" alt="PostgreSQL" title="PostgreSQL" align="center" height="25" /></a>

<br>

## Contributing

Development of Chronos is open source on GitHub through the tech accelerator umbrella OS Labs, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Chronos.



## Potential for Improvement
* The addition of Metrics for dynamic and historic data.
* Webhook integration for user alerts on threshold triggers.
* Persistent user thresholds. 
*

// should we put in this link and make another file?
- [Contributing](https://github.com/oslabs-beta/Venus/blob/master/CONTRIBUTING.md)
#
###### Return to [Top](#Venus)

<br>

## Authors
* Akshay Suggula [asuggula](https://github.com/asuggula)
* Oliver Roldan [oproldan1](https://github.com/oproldan1)
* Will Kencel [wkencel](https://github.com/wkencel)
* Vlad Munteanu [vxm5091](https://github.com/colinvandergraaf)
* Evan Perlman [evperlman](https://github.com/evperlman)

# Special Thanks:
Sanjay Lavingia
Mike Soennichsen 
Julie Wu
Will Bladon
Justin Cohen 

## License

Venus is <a href="#"><img src="./app/assets/mit-logo-color.png" alt="MIT" title="MIT" align="center" height="20" /></a> [licensed.]

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

#
###### Return to [Top](#Venus)