import React,{useState,useEffect,useReducer, initialState} from 'react';
import '../App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function ChangeTests(props) {
   
        // const [palautus, setPalautus] = useState(false)
  const [aktiivinenTentti, setAktiivinenTentti] = useState(0)
  

  const vaihdaTentti = (index) => {
    setAktiivinenTentti(index)
  }

//useReduce
    const lisaaKysymys= ( kysymysindex,tenttiindex) => {
        let syvakopio = JSON.parse(JSON.stringify(props.data))
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
         props.setData(syvakopio)
        }
  
      //useReduce
      const poistavaihtoehto= (e, kysymysindex,tenttiindex, vastausindex) => {
        let syvakopio = JSON.parse(JSON.stringify(props.data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset[vastausindex].vastaus = e.target.value
        let poisto = syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset
        poisto.splice(vastausindex,1)
        syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset = poisto
         props.setData(syvakopio)
      }
      //useReduce
      const poistaKysymys= (e, kysymysindex,tenttiindex, vastausindex) => {
        let syvakopio = JSON.parse(JSON.stringify(props.data))
        syvakopio[tenttiindex].kysymykset[kysymysindex].kysymys = e.target.value
        let poisto = syvakopio[tenttiindex].kysymykset
        poisto.splice(kysymysindex,1)
        syvakopio[tenttiindex].kysymykset = poisto
         props.setData(syvakopio)
      }
  
//dispatch({ type: "KYSYMYS_MUUTTUI", data: { newQuestion: e.target.value, kysymysindex:index,tenttiindex:index, vastausindex:index }})
console.log(props.data)
return <div>
<h2>Tervetuloa admin</h2>
<div className="main">
  {props.data.map((tentti,index)=><button className="TenttiButton" key={index} onClick={()=>vaihdaTentti(index)}>{tentti.tentti}</button>)}
  <div className="askCards">
    {props.data[aktiivinenTentti].kysymykset.map((item, index) => <div key={index} className="Card"><div className="Kysymys" ><span><input type="text"className="muokkaaKys" onChange={(e) => props.dispatch({ type: "KYSYMYS_MUUTTUI", data: { newQuestion: e.target.value,tenttiindex:[aktiivinenTentti], kysymysindex:index}}) }value={item.kysymys} rows="1" ></input></span><span  className="poisto" onClick={(e) => {poistaKysymys(e, index,aktiivinenTentti) }}><DeleteIcon style={{ color: "grey",fontSize:25, margin:"auto", verticalAlign:"middle" }}></DeleteIcon></span></div>


    {item.vastaukset.map((alkio, vastausindex) =>
      <div key={vastausindex}><label className="checkbox"><input type="checkbox" onChange={(e) =>  props.dispatch({ type: "OIKEA_VASTAUS", data: { newRightAnswer: e.target.checked,tenttiindex:[aktiivinenTentti],kysymysindex:index, vastausindex:vastausindex}})} checked={alkio.oikea} /><span><input  type="text"className="muokkaaVas" onChange={(e) => props.dispatch({ type: "VASTAUS_MUUTTUI", data: { newAnswer: e.target.value,tenttiindex:[aktiivinenTentti], kysymysindex:index, vastausindex:vastausindex }})}value={alkio.vastaus} rows="1" ></input></span></label>
      <span  className="poisto" onClick={(e) => {poistavaihtoehto(e, index,aktiivinenTentti,vastausindex) }}><DeleteIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle"}}></DeleteIcon></span>
      </div>)}
      <div  className="lisays" onClick={(e) => props.dispatch({ type: "LISAA_VASTAUS", data: { newQuestion: e.target.value,tenttiindex:[aktiivinenTentti], kysymysindex:index}}) }><AddCircleIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle"}}></AddCircleIcon></div>
    </div>)}
    <div className="lisaaKys" onClick={(index) => {lisaaKysymys( index,aktiivinenTentti) }}><AddCircleIcon style={{ color: "grey",fontSize:28,verticalAlign:"middle",textAlign:"center"}}></AddCircleIcon></div>
  </div>
</div>
</div>
  }
  

export default ChangeTests;
