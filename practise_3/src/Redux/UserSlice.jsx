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
        onRejection : (state,params) =>{
            state.loading = false;
            state.user = null;
            state.error = params.payload;
        },
        onFulfillment : (state,params) =>{
            state.loading = false;
            state.user = params.payload;
            state.error = null;
        }
    }
})

const userActions = UserSlice.actions;
export {userActions};
export default UserSlice