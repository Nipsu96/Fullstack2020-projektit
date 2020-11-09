import React,{useState,useEffect} from 'react';
import '../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function ChangeTests() {
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
        // const [palautus, setPalautus] = useState(false)
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

  const OikeaVastausValittu = (event, kysymysindex,tenttiindex, vastausindex) => {
    let syvakopio = JSON.parse(JSON.stringify(data))
    syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset[vastausindex].oikea = event.target.checked
    setData(syvakopio)
  }

  const vaihdaTentti = (index) => {
    setAktiivinenTentti(index)
  }
    const MuokkaaVastausta = (e, kysymysindex,tenttiindex, vastausindex) => {
        let syvakopio = JSON.parse(JSON.stringify(data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset[vastausindex].vastaus = e.target.value
        setData(syvakopio)
      }
    
      const MuokkaaKysymysta = (e, kysymysindex,tenttiindex) => {
        let syvakopio = JSON.parse(JSON.stringify(data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].kysymys = e.target.value
        setData(syvakopio)
      }
    
    //   const ikaMuuttui = (event, index) => {
    //     let syvakopio = JSON.parse(JSON.stringify(data))
    //     syvakopio[index].ika = event.target.value
    //     setData(syvakopio)
    //   }

    const lisaaKysymys= ( kysymysindex,tenttiindex) => {
        let syvakopio = JSON.parse(JSON.stringify(data))
        let uusikysymys=  {
            kysymys: "",
          vastaukset:
            [
              {
                vastaus: "", valittu: false, oikea: false
              }
            ]

        }
        let lisaa =  syvakopio[tenttiindex].kysymykset
          lisaa.push(uusikysymys)
          syvakopio[tenttiindex].kysymykset = lisaa
         setData(syvakopio)
        }
    
      const lisaavaihtoehto= ( kysymysindex,tenttiindex) => {
      let syvakopio = JSON.parse(JSON.stringify(data))
      let uusihenkilo=  {
        vastaus: "", valittu: false, oikea: false
      }
      let lisaa = syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset
        lisaa.push(uusihenkilo)
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset = lisaa
       setData(syvakopio)
      
      }
      const poistavaihtoehto= (e, kysymysindex,tenttiindex, vastausindex) => {
        let syvakopio = JSON.parse(JSON.stringify(data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset[vastausindex].vastaus = e.target.value
        let poisto = syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset
        poisto.splice(vastausindex,1)
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset = poisto
         setData(syvakopio)
      }
      const poistaKysymys= (e, kysymysindex,tenttiindex, vastausindex) => {
        let syvakopio = JSON.parse(JSON.stringify(data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].kysymys = e.target.value
        let poisto = syvakopio[tenttiindex].kysymykset
        poisto.splice(kysymysindex,1)
        syvakopio[tenttiindex].kysymykset = poisto
         setData(syvakopio)
      }
  
return <div>
<h2>Tervetuloa admin</h2>
<div className="main">
  {data.map((tentti,index)=><button className="TenttiButton" key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentti}</button>)}
  <div className="askCards">
    {data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" ><span><input className="muokkaaKys"   type="text"className="muokkaaKys" onChange={(e) => {MuokkaaKysymysta(e, index,aktiivinenTentti) }}value={item.kysymys} rows="1" ></input></span><span  className="poisto" onClick={(e) => {poistaKysymys(e, index,aktiivinenTentti) }}><DeleteIcon style={{ color: "grey",fontSize:25, margin:"auto", verticalAlign:"middle" }}></DeleteIcon></span></div>
    {item.vastaukset.map((alkio, vastausindex) =>
      <div key={vastausindex}><label className="checkbox"><input type="checkbox" onChange={(e) => {OikeaVastausValittu(e, index,aktiivinenTentti,vastausindex) }} checked={alkio.oikea} /><span><input  type="text"className="muokkaaVas" onChange={(e) => {MuokkaaVastausta(e, index,aktiivinenTentti,vastausindex) }}value={alkio.vastaus} rows="1" ></input></span></label>
      <span  className="poisto" onClick={(e) => {poistavaihtoehto(e, index,aktiivinenTentti,vastausindex) }}><DeleteIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle"}}></DeleteIcon></span>
      </div>)}
      <div  className="lisays" onClick={() => {lisaavaihtoehto( index,aktiivinenTentti) }}><AddCircleIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle"}}></AddCircleIcon></div>
    </div>)}
    <div className="lisaaKys" onClick={(index) => {lisaaKysymys( index,aktiivinenTentti) }}><AddCircleIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle",textAlign:"center"}}></AddCircleIcon></div>
    {/* <button className="showbutton" onClick={naytaVastaukset}>Näytä Vastaukset</button> */}
  </div>
  
</div>
{/* <div className="main">
  {data.map((tentti,index)=><button key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentti}</button>)}
  <div className="askCards">
    {palautus === false ? data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
      {item.vastaukset && <AskCard index={index} tenttiindex={aktiivinenTentti} vastaukset={item.vastaukset} VastausValittu={VastausValittu}></AskCard> }
    </div>)
      :
      data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" >{item.kysymys}</div>
        {item.vastaukset &&<ShowAnswers index={index} valittu={data.valittu}vastaukset={item.vastaukset} VastausValittu={VastausValittu}></ShowAnswers>}
      </div>)}
    <button className="showbutton" onClick={naytaVastaukset}>Näytä Vastaukset</button>
  </div>
</div> */}
  {/* // {data.map((item, index) => <div key={index}><input onChange={(event) => sukunimiMuuttui(event, index)} value={item.sukunimi}></input>

    // <input onChange={(event) => etunimiMuuttui(event, index)} value={item.etunimi} ></input>

    // <input onChange={(event) => ikaMuuttui(event, index)} value={item.ika}></input>
  
    // {item.lapset?<LapsiLista parentindex={index}lapsilista={item.lapset} lapanenMuuttui={lapanenMuuttui}></LapsiLista>:""}
    // <button onClick={()=>poistahenkilo(index)}>Poista henkilö</button>
    // </div>)}
    //     } */}
    </div>
  }
  

export default ChangeTests;
