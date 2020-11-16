import React, { useEffect, useState, useReducer, initialState } from 'react';
import './App.css';
import LapsiLista from './LapsiLista';
import axios from 'axios';

const initialData = [
  { etunimi: "Pekka", sukunimi: "Jakamo", ika: 69, lapset: [{lapsennimi: "Liisa", toinen_nimi: "Kaisa" }, {lapsennimi: "kaapo", toinen_nimi: "Riitta" }] },
  { etunimi: "Jarmo", sukunimi: "Jakamo", ika: 70 }]

function reducer(state, action) {
  let syvakopio = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'SUKUNIMI_MUUTTUI':
      syvakopio[action.data.ihminenindex].sukunimi = action.data.newText;
      return syvakopio
    case 'ETUNIMI_MUUTTUI':
      syvakopio[action.data.ihminenindex].etunimi = action.data.newText;
      return syvakopio
    case 'LAPSI_MUUTTUI':
      syvakopio[action.data.parentindex].lapset[action.data.lapsenindex].lapsennimi = action.data.newChild
      return syvakopio
     case 'IKA_MUUTTUI':
      syvakopio[action.data.ihminenindex].ika = action.data.newText;
    return syvakopio
    case 'POISTO':
      syvakopio.splice(action.data.ihminenindex, 1)
    return syvakopio
    case 'LISAA':
      let uusihenkilo = { etunimi: "", sukunimi: "", ika: 0 }
      syvakopio.push(uusihenkilo)
    return syvakopio
    case 'INIT_DATA':
      return action.data
    default:
      throw new Error();
  }
}

function App() {
  const [dataAlustettu, setDataAlustettu] = useState(false)
  const [state, dispatch] = useReducer(reducer, []);

  // const [sukunimi,setSukunimi]= useState([""])

  useEffect(() => {

    const createData = async () => {

      try {

        let result = await axios.post("http://localhost:3001/henkilot", initialData)
        dispatch({ type: "INIT_DATA", data: initialData })
        // setData(initialData)
        setDataAlustettu(true)

      } catch (exception) {
        alert("Tietokannan alustaminen epäonnistui")
      }
    }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:3001/henkilot")
        if (result.data.length > 0) {
          dispatch({ type: "INIT_DATA", data: result.data })
          //          setData(result.data);
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        createData();
        console.log(exception)
      }
    }
    fetchData();
  }, [])
  useEffect(() => {

    const updateData = async () => {
      try {
        let result = await axios.put("http://localhost:3001/henkilot", state)
      } catch (exception) {
        console.log("Datan päivitys ei onnistunut")
      }
      finally {

      }
    }/*  
    axios.put("http://localhost:3005/ihmiset", data)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }); */


    if (dataAlustettu) {
      updateData();
    }
  }, [state])

  // useEffect(() => {
  // let jemma = window.localStorage;
  // let uusidata = jemma.getItem("data")
  // if (!uusidata) {
  //   jemma.setItem("data", JSON.stringify(data))
  //   uusidata = data
  // } else {
  //   setData(JSON.parse(uusidata));
  // }
  // fetchData();
  // //put
  //   window.localStorage.setItem("data", JSON.stringify(data))
  // }, [data])
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
  // const painikepainettu = () => {
  //   // let uusdata = [...data]
  //   const uusdata = JSON.parse(JSON.stringify(data))
  //   const lopullinenData = data.concat(uusdata)
  //   setData(lopullinenData)
  // }


  // const sukunimiMuuttui = (event, index) => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   syvakopio[index].sukunimi = event.target.value
  //   setData(syvakopio)
  // }
  // const etunimiMuuttui = (event, index) => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   syvakopio[index].etunimi = event.target.value
  //   setData(syvakopio)
  // }

  // const ikaMuuttui = (event, index) => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   syvakopio[index].ika = event.target.value
  //   setData(syvakopio)
  // }

  // const lisaahenkilo = () => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   let uusihenkilo = { etunimi: "", sukunimi: "", ika: 0 }
  //   syvakopio.push(uusihenkilo)
  //   setData(syvakopio)
  //   // syvakopio[index].ika = event.target.value

  // }
  // const poistahenkilo = (index) => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   syvakopio.splice(index, 1)
  //   setData(syvakopio)
  //   // syvakopio[index].ika = event.target.value

  // }


  // const lapanenMuuttui = (event, vanhemmanindex, lapsenindex) => {
  //   let syvakopio = JSON.parse(JSON.stringify(data))
  //   syvakopio[vanhemmanindex].lapset[lapsenindex].lapsennimi = event.target.value
  //   setData(syvakopio)
  // }
console.log(state)

  return (
    <div className="Whole">
      <div className="nimet">
        {state.map((item, index) => <div key={index}>
          <input onChange={(event) => dispatch({ type: "SUKUNIMI_MUUTTUI", data: { newText: event.target.value, ihminenindex: index } })} value={item.sukunimi}></input>

          <input onChange={(event) => dispatch({ type: "ETUNIMI_MUUTTUI", data: { newText: event.target.value, ihminenindex: index } })} value={item.etunimi} ></input>
          
          <input onChange={(event) => dispatch({ type: "IKA_MUUTTUI", data: { newText: event.target.value, ihminenindex: index } })} value={item.ika}></input> 

          {item.lapset ? <LapsiLista parentindex={index} lapsilista={item.lapset} dispatch={(event) => dispatch({ type: "LAPSI_MUUTTUI", data: { newChild: event.target.value, parentindex: index , lapsenindex:index }})}></LapsiLista> : ""}
           <button onClick={(event) => dispatch({ type: "POISTO", data: { newText: event.target.value, ihminenindex: index } })}>Poista henkilö</button> 
        </div>)}
        <button onClick={(event) => dispatch({ type: "LISAA", data: { newText: event.target.value } })}>lisää henkilö</button>
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
