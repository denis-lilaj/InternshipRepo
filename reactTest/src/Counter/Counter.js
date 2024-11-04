import React, { useState } from 'react'

function Counter() {
  const [counterVal,setCounterVal]=useState(0);
  const [inputVal,setInputVal]=useState(1);

  const addToCounter=()=>{
    setCounterVal(counterVal+inputVal);
  }

  const subtractToCounter=()=>{
    setCounterVal(counterVal-inputVal);
  }
  
  return (
    <>
        <h3 data-testid="header">My Counter</h3>
        <h2 data-testid="counter">{counterVal}</h2>
        <button data-testid="subtract-btn" onClick={()=>subtractToCounter()}>-</button>
        <input data-testid="input" type="number" value={inputVal} onChange={(e)=>setInputVal(parseInt(e.target.value))}></input>
        <button data-testid="add-btn" onClick={()=>addToCounter()}>+</button>   
   </>
  )
}

export default Counter
