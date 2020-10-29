import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { day: "ma", number: 44 },
    { day: "pe", number: 100 },
    { day: "ke", number: 21 },
    { day: "ti", number: 66 },
    { day: "la", number: 22 }])

  // const painikepainettu=()=>{
  //   // let uusdata = [...data]
  //    const uusdata = JSON.parse(JSON.stringify(data))
  //   const lopullinenData = data.concat(uusdata)
  //   setData(lopullinenData)
  // }

  // const lapaset = (item) => {
  //   if (item.lapset !== undefined){
  //     return item.lapset.map(alkio=> <div>{alkio.lapsennimi}</div>)
  //   }
  // }

  // data.sort(function sortByDay(a, b) {
  //   let day1 = a.day.toLowerCase();
  //   let day2 = b.day.toLowerCase();
  //   return sorter[day1] - sorter[day2];
  // })


  //    // return data.sort((a, b) => a.value > b.value ? 1:-1).map(item=><div>{item.day} {item.value}
  //     // </div>)
  //     const sorter = {
  //   "ma": 0,
  //   "ti": 1,
  //   "ke": 2,
  //   "to": 3,
  //   "pe": 4,
  //   "la": 5,
  //   "su": 6
  // }
  //  const arvot = [ { "ma": 44 }, { "pe": 100 }, { "ke": 21 }, { "ti": 66 }, { "la": 22} ]
  // const pvm = ["ma", "ti", "ke", "to", "pe", "la", "su"]
  // arvot.sort((a, b) => {
  //       if(pvm.indexOf(Object.keys(a)[0]) < pvm.indexOf(Object.keys(b)[0])) {return -1}
  //       if(pvm.indexOf(Object.keys(a)[0]) > pvm.indexOf(Object.keys(b)[0])) {return 1}
  //       return 0})

  // setData(sorter)
  // console.log((data[0]))
  //  return "vittu"
  
  const SortByDay = () => {
    return data.sort((a, b) => a.day > b.day ? 1 : -1).map(item => <div>{item.day} {item.number}
    </div>)
  }

  const SortByValue = () => {
    return data.sort((a, b) => a.number > b.number ? 1 : -1).map(item => <div>{item.day} {item.number}
    </div>)
  }
 

  return (
    <div className="Whole">
      <div className="nimet">
        <h2>Javascript Tehtäviä 2</h2>
        <h3>Alkuperäinen lista</h3>
        {data.map((item, index) => <div key={index}>{item.day} {item.number}</div>)}
        <h3>Tehtävä 2.9</h3>
        <h5>Näytä numerojärjestyksessä</h5>
        <SortByValue />
        <h3>Tehtävä 2.10</h3>
         <p>Kesken,näyttää aakkosjärjestyksessä</p>  <SortByDay/>  
        <h3>Tehtävä 2.11</h3>
        <h5>Näytä vain parilliset</h5>
        {data.filter(item => item.number % 2 === 0).map((item, index) => <div key={index}>{item.day} {item.number}</div>)}
        <h3>Tehtävä 2.12</h3>
        <h5>Näytä vain ne, joiden toinen kirjain on E</h5>
        {data.filter(item => item.day.includes("e")).map((item, index) => <div key={index}>{item.day} {item.number}</div>)}
      </div>
    </div>
  );
}

export default App;
