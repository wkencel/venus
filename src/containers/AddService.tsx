// /**
//  * @name TabContainer
//  * @desc Child of Navbar.jsx, parent container that hosts each tab displayed in NavBar
//  */

import React, { useContext, useState, useEffect, ContextType } from 'react';
import { appendErrors, useForm } from "react-hook-form"
//  import Typography from '@material-ui/core/Typography';
//  import Button from '@material-ui/core/Button';
// //  import axios from 'axios'
import { myContext } from '../contexts/globalContext'
import gifFile from "../imgs/venusGif.gif"
import venus from "./openingVenus.mp3"

// you could model this to get multiple input fields depending how many form fields you want
// later we can use a context in place of this

function AddService(): JSX.Element{

const { handleSubmit, register } = useForm();
  // destructure urls out of our global context
 
  // const [value, setValue] = useState<string>()

const onSubmit = handleSubmit((data) => {  
    // console.log(data.input, "value", value, 'urls', urls)
    setUrls([...urls, data.input])
// push the user input to our urls array
  })
  const [will, setWill] = useState('')
	
	const { urls, setUrls } = useContext(myContext);
	

	const handlePress = () => {
		setUrls(['new', 'state'])
	}

  return(
    <div id="tabContainer">
      Add Service Here
      <div className="navBarForm">
        <div id="audio">
        <audio autoPlay controls src={venus}/>
        </div>
        <form onSubmit={onSubmit}>
               <input ref={register({required: true})} id="input" name="input" placeholder="Add Endpoint" type="text" />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <img id="venusGif" src={gifFile} alt="" width={'200px'} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  ) 
}

export { AddService };