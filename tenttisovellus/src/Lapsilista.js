import React, { useEffect, useState } from 'react';
import './App.css';

function LapsiLista(props) {
    const [check,setCheck]=useState(false)
    const checked= ()=>{
        if (check===false){
            setCheck(true)
            console.log(check)
        }else if (check===true){
            setCheck(false)
            console.log(check)
        }else{
            console.log("pöö")
        }
    }
      return (<div>
        {props.lapsilista.map((alkio, lapsenindex) => 
        <div  key={lapsenindex}><input type="checkbox" onClick={checked} value={check}/><label>{alkio.vastaus}</label></div>)}
        </div>
      );
    
  }
  

export default LapsiLista;
