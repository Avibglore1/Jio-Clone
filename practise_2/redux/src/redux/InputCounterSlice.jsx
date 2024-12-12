import {createSlice} from '@reduxjs/toolkit';

const InputCounterSlice = createSlice({
    name:'InputCounterSlice',
    initialState:{
        count:0,
        delta: 1
    },
    reducers: {
        increment : (state) =>{
            state.count += state.delta;
        },
        decrement : (state) =>{
            state.count -= state.delta;
        },
        updateDelta : (state, params) =>{
            state.delta = params.payload;
        }
    }
});

export default InputCounterSlice;
