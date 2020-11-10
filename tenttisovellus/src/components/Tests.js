import React, { useEffect, useState } from 'react';
import '../App.css';
import AskCard from './AskCard';
import ShowAnswers from './ShowAnswer';

function Tentit()
{
  const [data, setData] = useState([
    {tentti:"Tentti1",kysymykset:[
      {kysymys: "Kumpi oli ensin:Muna vai Kana?",
      vastaukset:
        [
          {
            vastaus: "Muna", valittu: false, oikea: false
          },
          {
            vastaus: "Ei tiedetä", valittu: false, oikea: true
          }
        ]
    },
    {
      kysymys: "Mikä viikonpäivä on 13.11?",
      vastaukset:
        [
          {
            vastaus: "Perjantai", valittu: false, oikea: true
          },
          {
            vastaus: "Lauantai", valittu: false, oikea: false
          },
          {
            vastaus: "Sunnuntai", valittu: false, oikea: false
          }]
    }]},
    {tentti:"Tentti2",kysymykset:[
    {
      kysymys: "Minkä värinen on paloauto?",
      vastaukset:
        [
          {
            vastaus: "Sininen", valittu: false, oikea: false
          },
          {
            vastaus: "Vihreä", valittu: false, oikea: false
          },
          {
            vastaus: "Punainen", valittu: false, oikea: true
          }
        ]
    },
    { kysymys: "Montako päivää on viikossa?",
      vastaukset:
        [
          {
            vastaus: "8", valittu: false, oikea: false
          },
          {
            vastaus: "4", valittu: false, oikea: false
          },
          {
            vastaus: "7", valittu: false, oikea: true
          }]
    }]}])
  const [palautus, setPalautus] = useState(false)
  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)
 
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

  const VastausValittu = (event, kysymysindex,tenttiindex, vastausindex) => {
    let syvakopio = JSON.parse(JSON.stringify(data))
    syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset[vastausindex].valittu = event.target.checked
    setData(syvakopio)
  }


  const naytaVastaukset = ( kysymysindex,tenttiindex) => {
    setPalautus(true)
   console.log("Catch") 
  //  let syvakopio = JSON.parse(JSON.stringify(data))
  //   let lisaa =  syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset
  //   console.log(kysymysindex)
  }

  const vaihdaTentti = (index) => {
    setAktiivinenTentti(index)
  }
  return <div className="main">
  {data.map((tentti,index)=><button className="TenttiButton"key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentti}</button>)}
  <div className="askCards">
    {palautus === false ? data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
      {item.vastaukset && <AskCard index={index} tenttiindex={aktiivinenTentti} vastaukset={item.vastaukset} VastausValittu={VastausValittu}></AskCard> }
    </div>)
      :
      data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
        {item.vastaukset &&<ShowAnswers index={index} valittu={data.valittu}vastaukset={item.vastaukset} VastausValittu={VastausValittu}></ShowAnswers>}
      </div>)}
    <button className="showbutton" onClick={(index)=>{naytaVastaukset(index,aktiivinenTentti)}}>Näytä Vastaukset</button>
  </div>
</div>
}



export default Tentit;