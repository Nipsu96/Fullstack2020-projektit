import React, { useEffect, useState } from 'react';
import './App.css';

function LapsiLista(props) {
    const lapanenMuuttui=(e,index, lapsenindex)=>{

    }
      return (<div>
        {props.lapsilista.map((alkio, lapsenindex) => 
        <div key={lapsenindex}><input onChange={(e) => {props.lapanenMuuttui(e,props.parentindex, lapsenindex)}} value={alkio.lapsennimi}></input></div>)}
        </div>
      );
    
  }
  

export default LapsiLista;
