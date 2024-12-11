import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counterSlice',
    initialState:{
        count: 0
    },
    reducers:{
        increment: (state) =>{
            state.count += 1;
        },
        decrement: (state) =>{
            state.count -= 1;
        }
    }
})

export default CounterSlice;