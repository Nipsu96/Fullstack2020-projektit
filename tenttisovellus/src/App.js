import React, { useEffect, useState } from 'react';
import './App.css';
import AskCard from './components/AskCards';

// function App() {
//   import React, { useEffect, useState } from 'react';
// import './App.css';
import LapsiLista from './Lapsilista';

function App() {
  const [data, setData] = useState([
    { kysymys: "tämä on testikysymys",vastaukset:[{vastaus:"Kivi"},{vastaus:"Kallio"
  }]},
      { kysymys: "tämä on testikysymys osa 2",vastaukset:[{vastaus:"Koska voin"},{vastaus:"Puu"}]}])
const [check,setCheck]=useState([false])
  // const [sukunimi,setSukunimi]= useState([""])

  useEffect(() => {
    let jemma = window.localStorage;
    let uusicheck = jemma.getItem("check")
    if (!uusicheck) {
      jemma.setItem("check", JSON.stringify(check))
      uusicheck = check
    } else {
      setCheck(JSON.parse(uusicheck));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("check", JSON.stringify(check))
  }, [check])

  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
         <li><a className="active" href="#home">Tentit</a></li>
         <li><a href="#about">Tietoa sovelluksesta</a></li>
       </ul>
     </header>
     <div className="main">
      <div className="askCards">
        {data.map((item, index) => <div className="singleAskCard" key={index}><span>{item.kysymys}</span>
        {item.vastaukset?<LapsiLista  parentindex={index}lapsilista={item.vastaukset} ></LapsiLista>:""}
        </div>)}
      </div>
    </div>
    </div>
  );
}

export default App;

//   const [data, setData] = useState([
//     { kysymys: "tämä on testikysymys",vastaukset:[{vastaus:"Kivi"},{vastaus:"Kallio"}]}])
//   // const [sukunimi,setSukunimi]= useState([""])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul>
//           <li><a className="active" href="#home">Tentit</a></li>
//           <li><a href="#about">Tietoa sovelluksesta</a></li>
//         </ul>
//       </header>
//       <div className="main">
//         <div className="AskCard">
          
//         {(item,index)=>item.vastaukset?<AskCard index={index}vastauslista={item.vastaukset} data={data}/>:""}
//   {/* {data.map((item, index) => <div key={index} className="container"><p >{item.kysymys}</p><br/><input type= "checkbox" className="checkmark"></input>{item.vastaukset?<p>{item.vastaus}</p>:""} </div>)} */}

