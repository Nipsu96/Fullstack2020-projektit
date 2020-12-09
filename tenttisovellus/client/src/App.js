import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tentit from './components/Tests';
import ChangeTests from './components/Modify';
import KeskiArvot from './components/AverageTable';
import axios from 'axios';


function reducer(state, action) {
  let syvakopio = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'VASTAUS_VALITTU':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vaihtoehdot[action.data.vaihtoehtoindex].valittu = action.data.Answer;
      return syvakopio
    case 'OIKEA_VASTAUS':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset[action.data.vastausindex].oikea = action.data.newRightAnswer;
      return syvakopio
    case 'VASTAUS_MUUTTUI':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset[action.data.vastausindex].vastaus = action.data.newAnswer
      return syvakopio
    case 'KYSYMYS_MUUTTUI':
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].kysymys = action.data.newQuestion;
      return syvakopio
    case 'LISAA_KYSYMYS':
      let lisaakysymys = syvakopio[action.data.tenttiindex].kysymykset
      let uusikysymys = {
        kysymys: "",
        vastaukset:[
          {
              vastaus: "", valittu: false, oikea: false
            }
          ]}
      lisaakysymys.push(uusikysymys)
      syvakopio[action.data.tenttiindex].kysymykset = lisaakysymys
      return syvakopio
    case 'LISAA_VASTAUS':
      let lisaavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset
      let uusivastaus = {
        vastaus: "", valittu: false, oikea: false
      }
      lisaavastaus.push(uusivastaus)
      syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset = lisaavastaus
      return syvakopio
      case 'POISTA_VASTAUS':
        let poistavastaus = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset
        poistavastaus.splice([action.data.vastausindex],1)
        syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset = poistavastaus
      return syvakopio
      case 'POISTA_KYSYMYS':
        let poistakysymys = syvakopio[action.data.tenttiindex].kysymykset
        poistakysymys.splice([action.data.kysymysindex],1)
        syvakopio[action.data.tenttiindex].kysymykset= poistakysymys
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

        let result = await axios.get("http://localhost:3005/tentit")
        dispatch({ type: "INIT_DATA", data: result.data })
        // setData(initialData)
        setDataAlustettu(true)
      } catch (exception) {
        alert("Tietokannan alustaminen epäonnistui")
      }
    }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:3005/tentit")

        if (result.data.length > 0) {
          for(var i = 0; i < result.data.length; i++){
            result.data[i].kyselyt=[]
            let kysymykset=await axios.get("http://localhost:3005/kysymykset/"+ result.data[i].tentti_id)
            result.data[i].kysymykset= kysymykset.data

          if(result.data[i].kysymykset.length > 0) {
            for(var j = 0;j < result.data[i].kysymykset.length;j++){
              result.data[i].kysymykset[j].vaihtoehdot=[]
              let vaihtoehdot=await axios.get("http://localhost:3005/vastausvaihtoehdot/"+ result.data[i].kysymykset[j].kysymys_id)
              result.data[i].kysymykset[j].vaihtoehdot= vaihtoehdot.data
            }
            }
          }
          dispatch({ type: "INIT_DATA", data: result.data })
          //          setData(result.data);
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        createData();
      }
    }
    fetchData();
  }, [])
  useEffect(() => {

    // const updateData = async () => {
    //   try {
    //     // let result = await axios.put("http://localhost:3005/tentit", state)
    //   } catch (exception) {
    //     console.log("Datan päivitys ei onnistunut")
    //   }
    //   finally {

    //   }
    // }
    // if (dataAlustettu) {
    //   updateData();
    // }
  }, [state])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/tests" className="active" >Tentit</Link></li>
            <li><Link to="/about">Tietoa sovelluksesta</Link></li>
            <li><Link to="/admin">Muokkaa/poista/lisää</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/tests">
            {state.length > 0 ? <Tentit data={state} dispatch={dispatch} /> : "Tietoa haetaan"}
          </Route>
          <Route path="/admin">
            {state.length > 0 ? <ChangeTests data={state} dispatch={dispatch} /> : "Tietoa haetaan"}
          </Route>
          <Route path="/about">
            {state.length > 0 ? <KeskiArvot data={state} dispatch={dispatch} /> : "Tietoa haetaan"}
          </Route>
        </Switch>
      </div></Router>
  );
}
export default App;

