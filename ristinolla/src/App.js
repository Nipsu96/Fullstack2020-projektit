import React, { useState } from 'react';
import './App.css';


//JSX
function App() {
   //array destructuring
   const [player,setPlayer] = useState("X")
   const [value,setValue] = useState("")
   const [value2,setValue2] = useState("")
   const [value3,setValue3] = useState("")
   const [value4,setValue4] = useState("")
   const [value5,setValue5] = useState("")
   const [value6,setValue6] = useState("")
   const [value7,setValue7] = useState("")
   const [value8,setValue8] = useState("")
   const [value9,setValue9] = useState("")

   const ylavasen = () =>{
     if(value === ""){
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
     }else{
      alert("Ruutu on jo käytössä!")
     }
     if(value2==="X"&& value3==="X"&& player==="X"){
      alert("Voitto!")
    }else if(value4==="X"&& value7==="X"&& player==="X"){
     alert("Voitto!")
   }else if(value5==="X"&& value9==="X"&& player==="X"){
     alert("Voitto!")
   }
   if(value2==="O"&& value3==="O"&& player==="O"){
     alert("Voitto!")
   }else if(value4==="O"&&value7==="O"&& player==="O"){
    alert("Voitto!")
  }else if(value5==="O"&& value9==="O"&& player==="O"){
    alert("Voitto!")
  }
   }
   const ylakeski = () =>{
    if(value2=== ""){
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
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value==="X"&& value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value5==="X"&&value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value==="O"&& value3==="O"&& player==="O"){
   alert("Voitto!")
 }else if(value5==="O"&& value9==="O"&& player==="O"){
  alert("Voitto!")
}
   }

  
  const ylaoikea = () =>{
    if(value3=== ""){
      if(player === "X"){
        setValue3("X");
      }else{
        setValue3("O");
      }
  
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value==="X"&& value2==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value5==="X"&& value7==="X" && player==="X"){
   alert("Voitto!")
 }else if(value6==="X"&& value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value==="O"&& value2==="O"&& player==="O"){
   alert("Voitto!")
 }else if(value5==="O"&& value7==="O"&& player==="O"){
  alert("Voitto!")
}else if(value6==="O"&& value9==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const keskivasen = () =>{
    if(value4=== ""){
      if(player === "X"){
        setValue4("X");
      }else{
        setValue4("O");
      }
  
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value==="X"&&value7==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value5==="X"&& value6==="X"&& player==="X"){
   alert("Voitto!")
  }
 if(value==="O"&&value7==="O"&& player==="O"){
   alert("Voitto!")
 }else if(value5==="O"&&value6==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const keskikeski = () =>{
    if(value5=== ""){
      if(player === "X"){
        setValue5("X");
      }else{
        setValue5("O");
      }
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value2==="X"&&value8==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value4==="X"&&value6==="X"&& player==="X"){
   alert("Voitto!")
 }else if(value==="X"&&value9==="X"&& player==="X"){
   alert("Voitto!")
 }else if(value3==="X"&&value7==="X"&& player==="X"){
  alert("Voitto!")
}
if(value2==="O"&&value8==="O"&& player==="O"){
  alert("Voitto!")
}else if(value4==="O"&&value6==="O"&& player==="O"){
 alert("Voitto!")
}else if(value==="O"&&value9==="O"&& player==="O"){
 alert("Voitto!")
}else if(value3==="O"&&value7==="O"&& player==="O"){
alert("Voitto!")
}
  }
  const keskioikea = () =>{
    if(value6=== ""){
      if(player === "X"){
        setValue6("X");
      }else{
        setValue6("O");
      }
  
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value9==="X"&&value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value4==="X"&&value5==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value9==="O"&&value3==="O"&& player==="O"){
   alert("Voitto!")
 }else if(value4==="O"&&value5==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const alavasen = () =>{
    if(value7=== ""){
      if(player === "X"){
        setValue7("X");
      }else{
        setValue7("O");
      }
  
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value4==="X"&&value==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value5==="X"&&value3==="X"&& player==="X"){
   alert("Voitto!")
 }else if(value8==="X"&&value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value4==="O"&&value==="O"&& player==="O"){
  alert("Voitto!")
}else if(value5==="O"&&value3==="O"&& player==="O"){
 alert("Voitto!")
}else if(value8==="O"&&value9==="O"&& player==="O"){
 alert("Voitto!")
}
  }
  const alakeski = () =>{
    if(value8=== ""){
      if(player === "X"){
        setValue8("X");
      }else{
        setValue8("O");
      }
  
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value2==="X"&&value5==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value7==="X"&& value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value2==="O"&&value5==="O"&& player==="O"){
   alert("Voitto!")
}else if(value7==="O"&&value9==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const alaoikea = () =>{
    if(value9=== ""){
      if(player === "X"){
        setValue9("X");
      }else{
        setValue9("O");
      }
      if(player === "X"){
       setPlayer("O")
      }else{
        setPlayer("X")
      }
   }else{
    alert("Ruutu on jo käytössä!")
   }
   if(value6==="X"&&value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(value==="X"&&value5==="X"&& player==="X"){
   alert("Voitto!")
 }else if(value7==="X"&&value8==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(value3==="O"&&value6==="O"&& player==="O"){
   alert("Voitto!")
 }else if(value==="O"&&value5==="O"&& player==="O"){
  alert("Voitto!")
}else if(value7==="O"&&value8==="O"&& player==="O"){
  alert("Voitto!")
}
  }

  if(value!==""&&value2!==""&&value3!==""&&value4!==""&&value5!==""&&value6!==""&&value7!==""&&value8!==""&&value9!==""){
    alert("Tasapeli! Aloita alusta!")
  }

  const Reset = () =>{
    setValue("");
    setValue2("");
    setValue3("")
    setValue4("")
    setValue5("")
    setValue6("")
    setValue7("")
    setValue8("")
    setValue9("")
    setPlayer("X")
  }
  
  return (
    <div className="Whole">
<div className="ticTacToe">
        <h3>Ristinolla</h3> 
        <button onClick={Reset}>Aloita asusta</button>
        <p>On {player} vuoro</p>
      <div className="column">
        <span className="square" onClick={ylavasen}>{value}</span>
        <span className="square" onClick={ylakeski}>{value2}</span>
        <span className="square" onClick={ylaoikea}>{value3}</span>
      </div>
      <div className="column">
        <span className="square" onClick={keskivasen}>{value4}</span>
        <span className="square"onClick={keskikeski}>{value5}</span>
        <span className="square"onClick={keskioikea}>{value6}</span>
      </div>
      <div className="column">
        <span className="square"onClick={alavasen}>{value7}</span>
        <span className="square"onClick={alakeski}>{value8}</span>
        <span className="square"onClick={alaoikea}>{value9}</span>
      </div>
    </div>
    </div>
  );
}
//Background Photo from  <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
export default App;
