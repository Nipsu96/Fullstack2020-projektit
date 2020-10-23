import React, { useState } from 'react';
import './App.css';

function App() {

  const [nimet, setNimet] = useState(["Jarno", "pekka", "kari","Jarno", "pekka", "kari"])
  const [osanimet, setOsaNimet] = useState([])
  const [nappula, setNappulat] = useState(["x", "O", "x", "x", "x", "O", "x", "O", "O"])

  const nappulaPainettu = (index) => () => {
    console.log("Nappula painettu" + index)

    let uusilista =nimet.concat([nimet[index]])
    setNimet(uusilista)
  }

  const painikePainettu = ()=>{
    let listaJarnot = nimet.filter(item=>item==="Jarno")
    setOsaNimet(listaJarnot)
  }

  const nappulaMuuttui =(event, index) =>{
      let uusilista = [...nappula]
      uusilista[index] =event.target.value
      console.log(event.target.value)
      setNappulat(uusilista)
  }
  return (
    <div className="Whole">
      <div className="nimet">
      {nappula.map((nappula, index) => <input key={index} onChange={(event)=>nappulaMuuttui(event,index)} value={nappula} ></input>)}

        {nimet.map((item,index)=><button key={index} onClick={nappulaPainettu(index)}
        >{item}</button>)}<br/>
        
        <button onClick={painikePainettu}>Näytä vain Jarnot</button><br/>
        {osanimet.length===0?"Jarnoja ei ole vielä suodatettu":osanimet.map((item,index)=><button key={index} onClick={nappulaPainettu(index)}
        >{item}</button>)} <br/>
        {nappula.map((nappula, index) => <button key={index} onClick={nappulaPainettu(index)} >{nappula}</button>)}
      </div>
    </div>
  );
}

export default App;
