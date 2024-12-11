import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import counterSlice from './Redux/Slice'
const actions = counterSlice.actions

function App() {
const count = useSelector((store)=>{return store.counterState.count})
const dispatch = useDispatch();
const increment = () =>{
  dispatch(actions.increment())
}

const decrement = () =>{
 dispatch(actions.decrement());
}
  return (
    <div style={{border: '3px solid green', margin: '1rem', display: 'flex', padding: '15px'}}>
      <button onClick={increment}>+</button>
      <div style={{padding:'5px 10px'}}>{count}</div>
      <button onClick={decrement}>-</button>
    </div> 
  )
}

export default App
