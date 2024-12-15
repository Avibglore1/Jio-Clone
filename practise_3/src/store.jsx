import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Redux/UserSlice'
const store = configureStore({
    reducer:{
        UserSlice: UserSlice.reducer
    }
})

export default store