import CounterSlice from "./Slice";
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        countStore : CounterSlice.reducer
    },
})

export default store;