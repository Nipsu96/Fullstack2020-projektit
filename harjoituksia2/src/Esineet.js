import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


//Axios, useEffect Context API, usereducer, REDUX
const Esineet = (props) => {
    const [data,setData] = useState(["Dataa haetaan"])
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [valittuPaikkakunta, setValittuPaikkakunta] = useState("")
    const [etsi, setEtsi] = useState("")
    useEffect(()=>{
        async function haeDataa(){
            let result = await axios('https://api.huuto.net/1.1/categories/'+props.id+'/items?area='+valittuPaikkakunta+'&words='+etsi
            )
            //console.log(result)
            let a = JSON.parse(result.request.response).items
            setData(JSON.parse(result.request.response).items); 
            setDataNoudettu(true); 
           
        }
       
        haeDataa();
  
    },[props.id, valittuPaikkakunta,etsi])
    
    const paikkakuntaTamperePainettu = ()=>{
        setValittuPaikkakunta("Tampere")
    }
    const  paikkakuntaHelsinkiPainettu = ()=>{
        setValittuPaikkakunta("Helsinki")
    }

    const Search = (event)=>{
        setEtsi(event.target.value)
        console.log(etsi)
    }
    
    return (<div>
        <button onClick={paikkakuntaTamperePainettu}>Tampere</button>
        <button onClick={paikkakuntaHelsinkiPainettu}>Helsinki</button>
        <input onChange={(event)=> Search(event)} placeholder="Etsi"></input>

        {!dataNoudettu? "Odotetaan dataa..." :  data.map(alkio=><div>{alkio.title +" Paikassa:"+alkio.location}</div>)}
       
        </div>)

}

export default Esineet