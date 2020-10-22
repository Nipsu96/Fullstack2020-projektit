import React, { useState } from 'react';
import './App.css';


//JSX
function App() {
  //  //array destructuring
  //  const [Brutto, setBrutto] = useState(0);
  //  const [Vero, setVero] = useState(0);
  //  const [Veronmaara, setVeronmaara] = useState(0);
  //   useEffect(()=>{
  //      let verokoko= Brutto*Vero/100
  //    setVeronmaara(verokoko);
  //    },[Brutto,Vero])

   //laskin
   const [Lasku,setLasku] = useState("")
   const [FirstNum,setFirstNum] = useState("")
   const [Op,setOp] = useState("")
   // testit
  //  const palkkaMuuttunut = (event) => {
  //    setBrutto(event.target.value)
  //  }
 
  //  const veroMuuttunut = (event) => {
  //    setVero(event.target.value)
  //  }

   //Laskin
   const Nappi0 = () => {
    setLasku(Lasku+"0")
  }
   
  const Nappi1 = () => {
    setLasku(Lasku+"1")
  }
   
  const Nappi2 = () => {
    setLasku(Lasku+"2")
  }
   
  const Nappi3 = () => {
    setLasku(Lasku+"3")
  }
   
  const Nappi4 = () => {
    setLasku(Lasku+"4")
  }
   
  const Nappi5 = () => {
    setLasku(Lasku+"5")
  }
   
  const Nappi6 = () => {
    setLasku(Lasku+"6")
  }
   
  const Nappi7 = () => {
    setLasku(Lasku+"7")
  }
   
  const Nappi8 = () => {
    setLasku(Lasku+"8")
  }
   
   const Nappi9 = () => {
    setLasku(Lasku+"9")
  }
   
    const Screen = (event) => {
    setLasku(event.target.value)
  }
  const Plus = () =>{
      setFirstNum(Lasku)
      setOp("+")
      setLasku("")
      console.log(FirstNum)
      console.log(Lasku)
      
  }
  const Minus = () =>{
    setFirstNum(Lasku)
    setOp("-")
    setLasku("")
    console.log(FirstNum)
  }

  const Multi = () =>{
    setFirstNum(Lasku)
    setOp("*")
    setLasku("")
    console.log(FirstNum)
  }
  const Division = () =>{
    setFirstNum(Lasku)
    setOp("÷")
    setLasku("")
    console.log(FirstNum)
  }

  const Sum = () =>{
    console.log(FirstNum)
    console.log(Lasku)
    if (Op === "-"){
      setLasku(Number(FirstNum)-(Number(Lasku)))
    }else if (Op === "*"){
      setLasku(Number(FirstNum)*(Number(Lasku)))
    }else if(Op === "+"){
      setLasku(Number(FirstNum)+(Number(Lasku)))
    }else if (Op === "÷"){
      setLasku(Number(FirstNum)/(Number(Lasku)))
    }else{
      console.log("Ei toimi")
    }
  }
  
   const ClearScreen = () =>{
     setLasku("")
   }
  
   
  return (
    <div className="Whole">
      {/* <div className= "Test">
        <h3>Testailua</h3>
      Höööö :D <br /><br />
  
      <input onChange={(event) => palkkaMuuttunut(event)} value={Brutto}></input><br/>
      <input onChange={(event) => veroMuuttunut(event)} value={Vero}></input><br/>
      <p>Veron määrä on: {Veronmaara}</p>
      </div> */}
      <div className="Laskin">
        <h3>Laskin</h3>
      <input className="screen"onChange={(event) => Screen(event)} value={Lasku}></input><br/>
      <div className="buttons">
      <button onClick={Nappi7} value="7">7</button> <button onClick={Nappi8} value="8">8</button> <button onClick={Nappi9} value="9">9</button> <button onClick={ClearScreen}>C</button><br/>
      <button onClick={Nappi4} value="4">4</button> <button onClick={Nappi5} value="5">5</button> <button onClick={Nappi6} value="6">6</button> <button onClick={Multi}> * </button><br/>
      <button onClick={Nappi1} value="1">1</button> <button onClick={Nappi2} value="2">2</button> <button onClick={Nappi3} value="3">3</button> <button onClick={Division}>÷</button><br/>
      <button onClick={Nappi0} value="0">0</button> <button onClick={Plus}>+</button> <button onClick={Minus}>-</button> <button onClick={Sum}>=</button><br/>
      </div>
      </div>
    
    </div>
  );
}
//Background Photo from  <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
export default App;
