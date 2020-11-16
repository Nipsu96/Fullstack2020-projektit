import React, { useState,useEffect,useReducer } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tentit from './components/Tests';
import ChangeTests from './components/Modify';

const data =[
    {
      tentti: "Tentti1", kysymykset: [
        {
          kysymys: "Kumpi oli ensin:Muna vai Kana?",
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
        }]
    },
    {
      tentti: "Tentti2", kysymykset: [
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
        {
          kysymys: "Montako päivää on viikossa?",
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
        }]
    }]


function reducer(state, action) {
      let syvakopio = JSON.parse(JSON.stringify(state))
      switch (action.type) {
        case 'VASTAUS_VALITTU':
          syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset[action.data.vastausindex].valittu = action.data.Answer;
          console.log(action.data.kysymysindex)
          return syvakopio
        case 'OIKEA_VASTAUS':
          syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset[action.data.vastausindex].oikea= action.data.newRightAnswer;
          return syvakopio
        case 'VASTAUS_MUUTTUI':
          syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset[action.data.vastausindex].vastaus = action.data.newAnswer
          console.log("Vastausindex",action.data.vastausindex)
          return syvakopio
         case 'KYSYMYS_MUUTTUI':
          syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].kysymys = action.data.newQuestion;
        return syvakopio
        // case 'POISTO':
        //   syvakopio.splice(action.data.ihminenindex, 1)
        // return syvakopio
        case 'LISAA_VASTAUS':
          let lisaa = syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset
          //   lisaa.push(uusihenkilo)
          //   syvakopio[tenttiindex].kysymykset[kysymysindex].vastaukset = lisaa
          let uusivastaus=  {
            vastaus: "", valittu: false, oikea: false
          }
          lisaa.push(uusivastaus)
          syvakopio[action.data.tenttiindex].kysymykset[action.data.kysymysindex].vastaukset=lisaa
          console.log(syvakopio)
        return syvakopio
        case 'INIT_DATA':
          return action.data
        default:
          throw new Error();
      }
    }

function App() {
  
    const [state, dispatch] = useReducer(reducer,[]);
    const [dataAlustettu, setDataAlustettu] = useState(false)

    useEffect(() => {
      let jemma = window.localStorage;
      let uusidata = JSON.parse(jemma.getItem("data"))

      if (!uusidata) {
        jemma.setItem("data", JSON.stringify(data))
        dispatch({ type: "INIT_DATA", data: data })
      } else {
        dispatch({ type: "INIT_DATA", data: uusidata });
        setDataAlustettu(true)
      }
    }, [])
  
    useEffect(() => {
      if(dataAlustettu)
      window.localStorage.setItem("data", JSON.stringify(state))
    }, [state])

    console.log(state)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/tests" className="active" >Tentit</Link></li>
            <li><Link to="about">Tietoa sovelluksesta</Link></li>
            <li><Link to="/admin">Muokkaa/poista/lisää</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/tests">
            {state.length>0 ? <Tentit data={state}  dispatch={dispatch} />:"Tietoa haetaan" }
          </Route>
          <Route path="/admin">
          {state.length>0 ? <ChangeTests data={state}  dispatch={dispatch} />:"Tietoa haetaan"  }
          </Route>
        </Switch>
      </div></Router>
  );
}
export default App;

