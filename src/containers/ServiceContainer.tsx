/**
 * @name ServiceContainer
 * @desc Child of Dashboard.jsx, Parent container that holds and displays each Service Card
 */

import { ServiceCard } from '../components/ServiceCard'
import React from 'react';
import Box from '@material-ui/core/Box';
//  import TabContainer from './TabContainer'

function ServiceContainer(): JSX.Element{
	return(
			<div id="serviceContainer">
				<h1>Service Container</h1>
        <Box component="span" 
              display="block"
              m={4}>
					<ServiceCard />
				</Box>
			</div>
	)
 }

 // exports to Dashboard
 export { ServiceContainer };
