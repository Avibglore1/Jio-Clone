import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice";


const store = configureStore({
    reducer:{
        counterState: counterSlice.reducer
    }
})

export default store 