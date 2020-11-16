import React from 'react';
import '../App.css';

function AskCard(props) {

  return (<div>
    {props.vastaukset.map((alkio,vastausindex) =>
      <div key={vastausindex}><label className="checkbox"><input type="checkbox" onChange={(e) => props.dispatch({ type: "VASTAUS_VALITTU", data: { Answer:e.target.checked , tenttiindex:props.tenttiindex, kysymysindex:props.index, vastausindex:vastausindex }})} checked={alkio.valittu} /><span>{alkio.vastaus}</span></label></div>)}
  </div>

  );

}


export default AskCard;
