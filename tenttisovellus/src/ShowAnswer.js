import React, { useEffect, useState } from 'react';
import './App.css';

function ShowAnswers(props,event) {

  // const Check =()=> {
  //   let checked= ;
 
  if (props.valittu===props.oikea){
    console.log(props.valittu)
   }
  // else if(checked!==props.oikea){
  //   console.log("väärin meni")
  // }
  
  
      return (<div>
        {props.vastaukset.map((alkio, vastausindex) => 
        <div  key={vastausindex}><label className="checkbox"><input type="checkbox" checked={alkio.valittu} disabled/><span>{alkio.vastaus}</span></label><label className="checkboxRightAns" ><input type="checkbox" checked={alkio.oikea}/><span>{alkio.vastaus}</span></label></div>)}
        </div>
        
      );
      
  }
  

export default ShowAnswers;
