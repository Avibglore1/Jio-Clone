import InputCounterSlice from "./redux/InputCounterSlice";
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        counterStore : InputCounterSlice.reducer
    }
})

export default store;