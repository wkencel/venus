import { Switch } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { ChartContainer} from '../containers/ChartContainer';
import { PieChart1 } from './Chart';
// const [selected, setSelected] = useState<boolean>(false)


export function ChartRender (){
    const getValue = (e:string, val:boolean) => {
        console.log(val)
    }
    const [toggle, setToggle] = useState<boolean>(false)
    return(
        <div>
        <h2> Cycle Performance Chart</h2>
<Switch
color="primary"
size="small"
onChange={() => {console.log(toggle); setToggle(!toggle)}}
/>

<div className={toggle ? 'show' :'hide'}>
      { toggle ? <PieChart1 /> : null}
    </div>
</div>)
}