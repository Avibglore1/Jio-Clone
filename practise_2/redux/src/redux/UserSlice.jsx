import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState:{
        loading: true,
        user: null,
        error: null
    },
    reducers:{
        onPending : (state) =>{
            state.loading = true;
            state.user = null;
            state.error = null;
        },
        onRejected : (state, err) =>{
            state.loading = false;
            state.user = null;
            state.error = err.payload;
        },
        onFulfilled: (state,user) =>{
            state.loading = false;
            state.user = user.payload;
            state.error = false;
        }
    }
})
const userActions = UserSlice.actions;
export {userActions};
export default UserSlice;