import {useSelector,useDispatch} from 'react-redux';
import './App.css'
import CounterSlice from './redux/Slice';
const action = CounterSlice.actions
function App() {
  const dispatch = useDispatch();
  const count = useSelector((store)=>{
    return store.countStore.count
  })
  const increment = () =>{
    dispatch(action.increment());
  }
  const decrement = () =>{
    dispatch(action.decrement());
  }
  return (
    <div style={{display:'flex', padding:'15px'}}>
      <button onClick={increment}>+</button>
      <div style={{padding:'8px'}}>{count}</div>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
