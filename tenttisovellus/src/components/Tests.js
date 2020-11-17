import React, {useState } from 'react';
import '../App.css';
import AskCard from './AskCard';
import ShowAnswers from './ShowAnswer';

function Tentit(props)
{

  const [palautus, setPalautus] = useState(false)
  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)
 
  const naytaVastaukset = ( kysymysindex,tenttiindex) => {
    setPalautus(true)
   console.log("Catch") 
  }

  const vaihdaTentti = (index) => {
    setAktiivinenTentti(index)
  }

  return <div className="main">
  {props.data.map((tentti,index)=><button className="TenttiButton"key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentti}</button>)}
  <div className="askCards">
    {palautus === false ? props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
      {item.vastaukset && <AskCard index={index} tenttiindex={aktiivinenTentti} vastaukset={item.vastaukset} dispatch={props.dispatch}></AskCard> }
    </div>)
      :
      props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
        {item.vastaukset &&<ShowAnswers index={index} valittu={props.data.valittu}vastaukset={item.vastaukset} dispatch={props.dispatch}></ShowAnswers>}
      </div>)}
    <button className="showbutton" onClick={(index)=>{naytaVastaukset(index,aktiivinenTentti)}}>Näytä Vastaukset</button>
  </div>
</div>
}



export default Tentit;