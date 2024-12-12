import InputCounterSlice from "./redux/InputCounterSlice";
import {configureStore} from '@reduxjs/toolkit';
import UserSlice from "./redux/UserSlice";

const store = configureStore({
    reducer : {
        counterStore : InputCounterSlice.reducer,
        UserSlice: UserSlice.reducer
    }
})

export default store;