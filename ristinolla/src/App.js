import React, { useState } from 'react';
import './App.css';


//JSX
function App() {
   //array destructuring
   const [player,setPlayer] = useState("X")
   const [Value,setValue] = useState("")
   const [Value2,setValue2] = useState("")
   const [Value3,setValue3] = useState("")
   const [Value4,setValue4] = useState("")
   const [Value5,setValue5] = useState("")
   const [Value6,setValue6] = useState("")
   const [Value7,setValue7] = useState("")
   const [Value8,setValue8] = useState("")
   const [Value9,setValue9] = useState("")

   const ylavasen = () =>{
     if(Value === ""){
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
     if(Value2==="X"&& Value3==="X"&& player==="X"){
      alert("Voitto!")
    }else if(Value4==="X"&& Value7==="X"&& player==="X"){
     alert("Voitto!")
   }else if(Value5==="X"&& Value9==="X"&& player==="X"){
     alert("Voitto!")
   }
   if(Value2==="O"&& Value3==="O"&& player==="O"){
     alert("Voitto!")
   }else if(Value4==="O"&&Value7==="O"&& player==="O"){
    alert("Voitto!")
  }else if(Value5==="O"&& Value9==="O"&& player==="O"){
    alert("Voitto!")
  }
   }
   const ylakeski = () =>{
    if(Value2=== ""){
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
   if(Value==="X"&& Value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value5==="X"&&Value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value==="O"&& Value3==="O"&& player==="O"){
   alert("Voitto!")
 }else if(Value5==="O"&& Value9==="O"&& player==="O"){
  alert("Voitto!")
}
   }

  
  const ylaoikea = () =>{
    if(Value3=== ""){
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
   if(Value==="X"&& Value2==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value5==="X"&& Value7==="X" && player==="X"){
   alert("Voitto!")
 }else if(Value6==="X"&& Value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value==="O"&& Value2==="O"&& player==="O"){
   alert("Voitto!")
 }else if(Value5==="O"&& Value7==="O"&& player==="O"){
  alert("Voitto!")
}else if(Value6==="O"&& Value9==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const keskivasen = () =>{
    if(Value4=== ""){
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
   if(Value==="X"&&Value7==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value5==="X"&& Value6==="X"&& player==="X"){
   alert("Voitto!")
  }
 if(Value==="O"&&Value7==="O"&& player==="O"){
   alert("Voitto!")
 }else if(Value5==="O"&&Value6==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const keskikeski = () =>{
    if(Value5=== ""){
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
   if(Value2==="X"&&Value8==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value4==="X"&&Value6==="X"&& player==="X"){
   alert("Voitto!")
 }else if(Value==="X"&&Value9==="X"&& player==="X"){
   alert("Voitto!")
 }else if(Value3==="X"&&Value7==="X"&& player==="X"){
  alert("Voitto!")
}
if(Value2==="O"&&Value8==="O"&& player==="O"){
  alert("Voitto!")
}else if(Value4==="O"&&Value6==="O"&& player==="O"){
 alert("Voitto!")
}else if(Value==="O"&&Value9==="O"&& player==="O"){
 alert("Voitto!")
}else if(Value3==="O"&&Value7==="O"&& player==="O"){
alert("Voitto!")
}
  }
  const keskioikea = () =>{
    if(Value6=== ""){
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
   if(Value9==="X"&&Value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value4==="X"&&Value5==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value9==="O"&&Value3==="O"&& player==="O"){
   alert("Voitto!")
 }else if(Value4==="O"&&Value5==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const alavasen = () =>{
    if(Value7=== ""){
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
   if(Value4==="X"&&Value==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value5==="X"&&Value3==="X"&& player==="X"){
   alert("Voitto!")
 }else if(Value8==="X"&&Value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value4==="O"&&Value==="O"&& player==="O"){
  alert("Voitto!")
}else if(Value5==="O"&&Value3==="O"&& player==="O"){
 alert("Voitto!")
}else if(Value8==="O"&&Value9==="O"&& player==="O"){
 alert("Voitto!")
}
  }
  const alakeski = () =>{
    if(Value8=== ""){
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
   if(Value2==="X"&&Value5==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value7==="X"&& Value9==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value2==="O"&&Value5==="O"&& player==="O"){
   alert("Voitto!")
}else if(Value7==="O"&&Value9==="O"&& player==="O"){
  alert("Voitto!")
}
  }
  const alaoikea = () =>{
    if(Value9=== ""){
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
   if(Value6==="X"&&Value3==="X"&& player==="X"){
    alert("Voitto!")
  }else if(Value==="X"&&Value5==="X"&& player==="X"){
   alert("Voitto!")
 }else if(Value7==="X"&&Value8==="X"&& player==="X"){
   alert("Voitto!")
 }
 if(Value3==="O"&&Value6==="O"&& player==="O"){
   alert("Voitto!")
 }else if(Value==="O"&&Value5==="O"&& player==="O"){
  alert("Voitto!")
}else if(Value7==="O"&&Value8==="O"&& player==="O"){
  alert("Voitto!")
}
  }

  if(Value!==""&&Value2!==""&&Value3!==""&&Value4!==""&&Value5!==""&&Value6!==""&&Value7!==""&&Value8!==""&&Value9!==""){
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
        <span className="square" onClick={ylavasen}>{Value}</span>
        <span className="square" onClick={ylakeski}>{Value2}</span>
        <span className="square" onClick={ylaoikea}>{Value3}</span>
      </div>
      <div className="column">
        <span className="square" onClick={keskivasen}>{Value4}</span>
        <span className="square"onClick={keskikeski}>{Value5}</span>
        <span className="square"onClick={keskioikea}>{Value6}</span>
      </div>
      <div className="column">
        <span className="square"onClick={alavasen}>{Value7}</span>
        <span className="square"onClick={alakeski}>{Value8}</span>
        <span className="square"onClick={alaoikea}>{Value9}</span>
      </div>
    </div>
    </div>
  );
}
//Background Photo from  <a href="https://pngtree.com/free-backgrounds">pngtree.com</a>
export default App;
