import React,{useState} from 'react';
import '../App.css';

function ShowAnswers(props,vastausindex) {

  
 
      return (<div>
        {props.vastaukset.map((alkio, vastausindex,index,tenttiindex) => 
        <div  key={vastausindex} ><label className="checkbox"><input type="checkbox" checked={alkio.valittu} disabled/><span>{alkio.vastaus}</span></label><label className="checkboxRightAns" ><input type="checkbox" disabled="disabled" checked={alkio.oikea}/><span>{alkio.vastaus}</span></label></div>)}
        </div>
        
      );
      
  }
  

export default ShowAnswers;
