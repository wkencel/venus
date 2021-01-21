import React, { useState , useEffect } from 'react' ;    
import Pie  from '@ant-design/charts/es/pie' ;    
import { histData, historicalContext} from '../contexts/historicalContext' ; 

function PieChart(): JSX.Element {      
  // const { registerTheme } = G2 ;   
  // registerTheme ( 'custom-theme' , { 
  //   colors10 : [ '#FACDAA' , '#F4A49E' , '#EE7B91' , '#E85285' , '#BE408C' , '#BE408C' ] ,      
  //   colors20 : [ '#FACDAA' , '#F4A49E' , '#EE7B91' , '#E85285' , '#BE408C' , '#BE408C' , '#942D93' ] ,       
  // } ) ;

  const data: any = histData.historical

  const config = { 
    appendPadding : 10 , 
    data ,
    angleField : 'latency' , 
    colorField : 'uptime' , 
    radius : 0.8 , 
    label : { } , 
    interactions : [ { uptime: 'element-active' } ] ,    
    theme : 'custom-theme' , 
  } ;
  return < Pie { ... config } /> ;   
} ;

export default PieChart ;  