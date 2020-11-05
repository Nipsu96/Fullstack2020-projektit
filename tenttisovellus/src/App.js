import React, { useEffect, useState } from 'react';
import './App.css';
import AskCard from './AskCard';
import ShowAnswers from './ShowAnswer';

function App() {
  const [data, setData] = useState([
    {
      kysymys: "Kumpi oli ensin:Muna vai Kana?",
      vastaukset:
        [
          {
            vastaus: "Muna", valittu: false, oikea: false
          },
          {
            vastaus: "Kana", valittu: false, oikea: false
          },
          {
            vastaus: "Ei Kumpikaan", valittu: false, oikea: false
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
            vastaus: "Maanantai", valittu: false, oikea: false
          },
          {
            vastaus: "Tiistai", valittu: false, oikea: false
          },
          {
            vastaus: "Keskiviikko", valittu: false, oikea: false
          },
          {
            vastaus: "Torstai", valittu: false, oikea: false
          },
          {
            vastaus: "Perjantai", valittu: false, oikea: true
          },
          {
            vastaus: "Lauantai", valittu: false, oikea: false
          },
          {
            vastaus: "Sunnuntai", valittu: false, oikea: false
          }]
    },
    {
      kysymys: "Minkä värinen on paloauto?",
      vastaukset:
        [
          {
            vastaus: "Sininen", valittu: false, oikea: false
          },
          {
            vastaus: "Valkoinen", valittu: false, oikea: false
          },
          {
            vastaus: "Vihreä", valittu: false, oikea: false
          },
          {
            vastaus: "Punainen", valittu: false, oikea: true
          }
        ]
    },
    {
      kysymys: "Montako päivää on viikossa?",
      vastaukset:
        [
          {
            vastaus: "5", valittu: false, oikea: false
          },
          {
            vastaus: "2", valittu: false, oikea: false
          },
          {
            vastaus: "8", valittu: false, oikea: false
          },
          {
            vastaus: "4", valittu: false, oikea: false
          },
          {
            vastaus: "7", valittu: false, oikea: true
          }]
    }])
  const [palautus, setPalautus] = useState(false)
  const [tentti1, setTentti1] = useState([])
  const [tentti2, setTentti2] = useState()




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

  const VastausValittu = (event, kysymysindex, vastausindex) => {
    let syvakopio = JSON.parse(JSON.stringify(data))
    syvakopio[kysymysindex].vastaukset[vastausindex].valittu = event.target.checked
    setData(syvakopio)
  }


  const naytaVastaukset = (item) => {
    setPalautus(true)
    console.log("Catch")
  }

  const filterTentti2 = (item) => {
    data.filter(tentti => tentti === "Tentti2")
    console.log(data.tentti)
  }
  // const painikePainettu = ()=>{
  //   let listaJarnot = nimet.filter(item=>item==="Jarno")
  //   setOsaNimet(listaJarnot)
  // }


  // if (data.valittu===true && data.oikea===true){
  //   console.log("Sait oikein")
  // }else if(data.valittu!==true && data.oikea!==true){
  //   console.log("Ei yhtään oikeaa vastausta")
  // }


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a className="active" href="#home">Tentit</a></li>
          <li><a href="#about">Tietoa sovelluksesta</a></li>
        </ul>
      </header>
      <div className="main">
        <button className="textbutton" >Tentti 1</button>
        <button className="textbutton2" onClick={filterTentti2}>Tentti 2</button>
        <div className="askCards">
          {palautus === false ? data.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
            {item.vastaukset ? <AskCard index={index} vastaukset={item.vastaukset} VastausValittu={VastausValittu}></AskCard> : ""}
          </div>)
            :
            data.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
              {item.vastaukset ? <ShowAnswers index={index} valittu={data.valittu}vastaukset={item.vastaukset} VastausValittu={VastausValittu}></ShowAnswers> : ""}
            </div>)}
          <button className="showbutton" onClick={naytaVastaukset}>Näytä Vastaukset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

