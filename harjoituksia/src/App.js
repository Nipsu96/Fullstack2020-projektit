import React, { useEffect, useState } from 'react';
import './App.css';
import LapsiLista from './LapsiLista';

function App() {
  const [data, setData] = useState([
    { etunimi: "Pekka", sukunimi: "Jakamo", ika: 69, lapset: [{ lapsennimi: "Liisa", toinen_nimi: "Kaisa" }, { lapsennimi: "kaapo", toinen_nimi: "Riitta" }] },
    { etunimi: "Jarmo", sukunimi: "Jakamo", ika: 70 }])

  // const [sukunimi,setSukunimi]= useState([""])

  useEffect(() => {
    let jemma = window.localStorage;
    let uusidata = jemma.getItem("data")
    if (!uusidata) {
      jemma.setItem("data", JSON.stringify(data))
      uusidata = data
    } else {
      setData(JSON.parse(uusidata));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data))
  }, [data])
  // const [nimet, setNimet] = useState(["Jarno", "pekka", "kari","Jarno", "pekka", "kari"])
  // const [osanimet, setOsaNimet] = useState([])
  // const [nappula, setNappulat] = useState(["x", "O", "x", "x", "x", "O", "x", "O", "O"])

  // const nappulaPainettu = (index) => () => {
  //   console.log("Nappula painettu" + index)

  //   let uusilista =nimet.concat([nimet[index]])
  //   setNimet(uusilista)
  // }

  // const painikePainettu = ()=>{
  //   let listaJarnot = nimet.filter(item=>item==="Jarno")
  //   setOsaNimet(listaJarnot)
  // }

  // const nappulaMuuttui =(event, index) =>{
  //     let uusilista = [...nappula]
  //     uusilista[index] =event.target.value
  //     console.log(event.target.value)
  //     setNappulat(uusilista)
  // }
  const painikepainettu = () => {
    // let uusdata = [...data]
    const uusdata = JSON.parse(JSON.stringify(data))
    const lopullinenData = data.concat(uusdata)
    setData(lopullinenData)
  }


  const sukunimiMuuttui = (event, index) => {
    let syvakopio = JSON.parse(JSON.stringify(data))
    syvakopio[index].sukunimi = event.target.value
    setData(syvakopio)
  }

  const lapanenMuuttui = (event, vanhemmanindex, lapsenindex) => {
    let syvakopio = JSON.parse(JSON.stringify(data))
    syvakopio[vanhemmanindex].lapset[lapsenindex].lapsennimi = event.target.value
    setData(syvakopio)

  }
  return (
    <div className="Whole">
      <div className="nimet">
        {data.map((item, index) => <div key={index}><input onChange={(event) => sukunimiMuuttui(event, index)} value={item.sukunimi}></input>{item.etunimi} {item.ika}
        {item.lapset?<LapsiLista parentindex={index}lapsilista={item.lapset} lapanenMuuttui={lapanenMuuttui}></LapsiLista>:""}
        </div>)}
        <button onClick={painikepainettu}>Paina minua ;)</button>
        {/* {nappula.map((nappula, index) => <input key={index} onChange={(event)=>nappulaMuuttui(event,index)} value={nappula} ></input>)}

        {nimet.map((item,index)=><button key={index} onClick={nappulaPainettu(index)}
        >{item}</button>)}<br/>
        
        <button onClick={painikePainettu}>Näytä vain Jarnot</button><br/>
        {osanimet.length===0?"Jarnoja ei ole vielä suodatettu":osanimet.map((item,index)=><button key={index} onClick={nappulaPainettu(index)}
        >{item}</button>)} <br/>
        {nappula.map((nappula, index) => <button key={index} onClick={nappulaPainettu(index)} >{nappula}</button>)} */}
      </div>
    </div>
  );
}

export default App;
