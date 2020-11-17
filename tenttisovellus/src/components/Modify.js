import React, { useState } from 'react';
import '../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function ChangeTests(props) {

  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)

  const vaihdaTentti = (index) => {
    setAktiivinenTentti(index)
  }

  console.log(props.data)
  return <div>
    <h2>Tervetuloa admin</h2>
    <div className="main">
      {props.data.map((tentti, index) => <button className="TenttiButton" key={index} onClick={() => vaihdaTentti(index)}>{tentti.tentti}</button>)}
      <div className="askCards">
        {props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" ><span><input type="text" className="muokkaaKys" onChange={(e) => props.dispatch({ type: "KYSYMYS_MUUTTUI", data: { newQuestion: e.target.value, tenttiindex: [aktiivinenTentti], kysymysindex: index } })} value={item.kysymys} rows="1" ></input></span><span className="poisto" onClick={(e) => props.dispatch({ type: "POISTA_KYSYMYS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: index} })}><DeleteIcon style={{ color: "grey", fontSize: 25, margin: "auto", verticalAlign: "middle" }}></DeleteIcon></span></div>


          {item.vastaukset.map((alkio, vastausindex) =>
            <div key={vastausindex}><label className="checkbox"><input type="checkbox" onChange={(e) => props.dispatch({ type: "OIKEA_VASTAUS", data: { newRightAnswer: e.target.checked, tenttiindex: [aktiivinenTentti], kysymysindex: index, vastausindex: vastausindex } })} checked={alkio.oikea} /><span><input type="text" className="muokkaaVas" onChange={(e) => props.dispatch({ type: "VASTAUS_MUUTTUI", data: { newAnswer: e.target.value, tenttiindex: [aktiivinenTentti], kysymysindex: index, vastausindex: vastausindex } })} value={alkio.vastaus} rows="1" ></input></span></label>
              <span className="poisto" onClick={(e) => props.dispatch({ type: "POISTA_VASTAUS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: index, vastausindex: vastausindex } })}><DeleteIcon style={{ color: "grey", fontSize: 28, verticalAlign: "middle" }}></DeleteIcon></span>
            </div>)}
          <div className="lisays" onClick={(e) => props.dispatch({ type: "LISAA_VASTAUS", data: { newQuestion: e.target.value, tenttiindex: [aktiivinenTentti], kysymysindex: index } })}><AddCircleIcon style={{ color: "grey", fontSize: 28, verticalAlign: "middle" }}></AddCircleIcon></div>
        </div>)}
        <div className="lisaaKys" onClick={(index) => props.dispatch({ type: "LISAA_KYSYMYS", data: { tenttiindex: [aktiivinenTentti], kysymysindex: index } })}><AddCircleIcon style={{ color: "grey", fontSize: 28, verticalAlign: "middle", textAlign: "center" }}></AddCircleIcon></div>
      </div>
    </div>
  </div>
}


export default ChangeTests;
