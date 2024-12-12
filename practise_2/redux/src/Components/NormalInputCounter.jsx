import React, { useState } from 'react'

function NormalInputCounter() {
    const [count,setCount] = useState(0);
    const [delta,setDelta] = useState(1);
    const [value,setValue] = useState('');

    const increment = () =>{
        setCount(count+delta);
    }
    const decrement = () =>{
        setCount(count-delta);
    }
    const updateDeltaHandler = () =>{
        setDelta(Number(value))
    }
  return (
    <>
        <div>
            <input type='number' value = {value} onChange={(e)=>setValue(e.target.value)}></input>
            <button onClick={updateDeltaHandler}>Delta</button>
        </div>
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw'
        }}>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </div>
    </>
  )
}

export default NormalInputCounter