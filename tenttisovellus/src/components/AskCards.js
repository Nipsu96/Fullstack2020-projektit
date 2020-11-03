import React, { useEffect, useState } from 'react';
import '../App.css';

function AskCard(props,data) {
    // const lapanenMuuttui=(e,index, lapsenindex)=>{

    // }
      return (<div>
       {data.map((item, index) => <div key={index} className="container"><p >{item.kysymys}</p><br/><input type= "checkbox" className="checkmark"></input>{item.vastaukset?<p>{item.vastaus}</p>:""} </div>)}
        </div>
      );
    
  }
  

export default AskCard;
