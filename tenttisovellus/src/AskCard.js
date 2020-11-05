import React, { useEffect, useState } from 'react';
import './App.css';

function AskCard(props) {
  const [check, setCheck] = useState(false)

  return (<div>
    {props.vastaukset.map((alkio, vastausindex) =>
      <div key={vastausindex}><label className="checkbox"><input type="checkbox" onChange={(e) => { props.VastausValittu(e, props.index, vastausindex) }} checked={alkio.valittu} /><span>{alkio.vastaus}</span></label></div>)}
  </div>

  );

}


export default AskCard;
