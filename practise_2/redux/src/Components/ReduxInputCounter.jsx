import React, { useState } from 'react'
import InputCounterSlice from '../redux/InputCounterSlice'
import { useDispatch, useSelector } from 'react-redux';

const actions = InputCounterSlice.actions;
function ReduxInputCounter() {
    const [value, setValue] = useState("");
    const {count} = useSelector((store)=>{
        return store.counterStore
    })
    const dispatch = useDispatch();
    const increment = () =>{
        dispatch(actions.increment());
    }
    const decrement = () =>{
        dispatch(actions.decrement());
    }
    const updateDelta = () =>{
        dispatch(actions.updateDelta(Number(value)));
    }
  return (
    <>
        <div>
            <input type='number' value = {value} onChange={(e)=>setValue(e.target.value)}></input>
            <button onClick={updateDelta}>Delta</button>
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

export default ReduxInputCounter