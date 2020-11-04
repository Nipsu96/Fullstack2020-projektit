import React, { useEffect, useState } from 'react';
import './App.css';

function ShowAnswers(props) {
    const [check,setCheck]=useState(false)
    
      return (<div>
        {props.vastaukset.map((alkio, vastausindex) => 
        <div  key={vastausindex}><label className="checkbox"><input type="checkbox" checked={alkio.valittu} disabled/><span>{alkio.vastaus}</span></label><label className="checkboxRightAns"><input type="checkbox" checked={alkio.oikea}/><span>{alkio.vastaus}</span></label></div>)}
        </div>
        
      );
      
  }
  

export default ShowAnswers;
