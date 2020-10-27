import React, { useState, useEffect } from 'react';
import './App.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


//JSX
function App() {
  const [nimetVas, setNimetVas] = useState(["Jarno", "Kimmo", "Kari", "Juha", "Pekka", "Pertti"])
  const [nimetOik, setNimetOik] = useState(["Harri", "Heikki", "Henri", "Hugo", "Hannu", "Hemmo"])
  const [painettu,setPainettu]=useState([""])
  const [searchVas,setSearchVas]=useState([""])
  const [searchResultsVas, setSearchResultsVas] =useState([""])
  const [searchOik,setSearchOik]=useState([""])
  const [searchResultsOik, setSearchResultsOik] =useState([""])

  //Vasen lista
  useEffect(() => {
    const resultsVas = nimetVas.filter(item => item.includes(searchVas)
    );
    setSearchResultsVas(resultsVas);
  }, [nimetVas,searchVas]);

  //oikealista
  useEffect(() => {
    const resultsOik = nimetOik.filter(item => item.includes(searchOik)
    );
    setSearchResultsOik(resultsOik);
  }, [nimetOik,searchOik]);

  const nappulaPainettu = (index) => () => {
    console.log("Nappula painettu" + index)
    console.log(nimetVas[index])
      setPainettu(nimetVas[index])
      console.log("Tämä on painettu")
  }

  const nappulaPainettuOik = (index) => () => {
    console.log("Nappula painettu" + index)
    console.log(nimetOik[index])
    setPainettu(nimetOik[index])
  }
 
  const moveleft =  () => {
    console.log("Nimi siirretty vasemalle")
    console.log(painettu)
    let uusilista = nimetVas.concat([painettu])
    setNimetVas(uusilista)
    console.log(nimetVas)
    let uusiOikeaLista = nimetOik.filter(item=>item!==painettu)
    setNimetOik(uusiOikeaLista)
  }
  const moveright =  () => {
    console.log("Nimi siirretty oikealle")
    console.log(painettu)
    let uusilista = nimetOik.concat([painettu])
    setNimetOik(uusilista)
    console.log(nimetOik)
    let uusiVasenLista = nimetVas.filter(item=>item!==painettu)
    setNimetVas(uusiVasenLista)
  }

  const etsiVasen = (event) =>{
    setSearchVas(event.target.value)
  }
  const etsiOikea = (event) =>{
    setSearchOik(event.target.value)
  }
  return (
    <div className="Whole">
      <h3>Lista</h3>
      <div className="Lista">
        
        <div className="nimetVasen"> 
        
        <input placeholder="Suodata" onChange={etsiVasen}value={searchVas}></input>
         {searchResultsVas.map((item, index) => <button key={index} onClick={nappulaPainettu(index)}
          >{item}</button>)}<br />
        </div>
        <div className="nuolet">
         <button className="nuoliOik" onClick={moveright}>Siirrä oikealle <ArrowRightIcon></ArrowRightIcon></button>
          <button className="nuoliVas" onClick={moveleft}><ArrowLeftIcon></ArrowLeftIcon>Siirrä vasemmalle</button>
        </div>
        <div className="nimetOikea">
        <input placeholder="Suodata" onChange={etsiOikea}value={searchOik}></input>
          {searchResultsOik.map((item, index) => <button key={index} onClick={nappulaPainettuOik(index)}
          >{item}</button>)}<br />
        </div>
      </div>

    </div>
  );
}
//Background Photo from  <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
export default App;
