import React, { useEffect, useState } from 'react';
import './App.css';

function LapsiLista(props) {
    
      return (<div>
        {props.lapsilista.map((alkio, lapsenindex) => 
        <div key={lapsenindex}><input onChange={(e) => {props.dispatch(e,props.parentindex, lapsenindex)}} value={alkio.lapsennimi}></input></div>)}
        </div>
      );
    
  }
  

export default LapsiLista;
