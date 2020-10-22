import React, { useState } from 'react';
import './App.css';


//JSX
function App() {
   //array destructuring
   const [player,setPlayer] = useState("X")
   const [Value,setValue] = useState("")
   const [Value2,setValue2] = useState("")

   const ylavasen = () =>{
     console.log("wau, painoit ruutua")
     if(player === "X"){
        setValue("X");
     }else{
      setValue("O");
     }
    
     if(player === "X"){
       setPlayer("O")
     }else{
      setPlayer("X")
     }
     
     console.log(player)
   }
   const ylakeski = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const ylaoikea = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const keskivasen = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const keskikeski = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const keskioikea = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const alavasen = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const alakeski = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue("X");
    }else{
     setValue("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
  const alaoikea = () =>{
    console.log("wau, painoit ruutua")
    if(player === "X"){
       setValue2("X");
    }else{
     setValue2("O");
    }
   
    if(player === "X"){
      setPlayer("O")
    }else{
     setPlayer("X")
    }
    
    console.log(player)
  }
   
  return (
    <div className="Whole">
<div className="ticTacToe">
        <h3>Ristinolla</h3>
        <p>On {player} vuoro</p><br/>
      <div className="column">
        <span className="square" onClick={ylavasen}></span>
        <span className="square" onClick={ylakeski}></span>
        <span className="square" onClick={ylaoikea}></span>
      </div>
      <div className="column">
      <span className="square" onClick={keskivasen}>{Value}</span>
        <span className="square"onClick={keskikeski}>{Value2}</span>
        <span className="square"onClick={keskioikea}>{Value}</span>
      </div>
      <div className="column">
        <span className="square"onClick={alavasen}></span>
        <span className="square"onClick={alakeski}></span>
        <span className="square"onClick={alaoikea}></span>
      </div>
    </div>
    </div>
  );
}
//Background Photo from  <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
export default App;
