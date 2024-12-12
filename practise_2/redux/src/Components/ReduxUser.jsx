import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUserMiddleware from "../redux/Middleware/fetchMiddleware";
function ReduxUser(){
    const {user, loading, error} = useSelector((store) =>{
        return store.UserSlice
    })
    const dispatch = useDispatch();
    useEffect(()=>{
        async function getUser(){
            dispatch(fetchUserMiddleware(5))
        }
        getUser();
    },[])


if(loading){
    return <div>...Loading</div>
}
if(error){
    return <div>Error...{error.message}</div>
}
return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
        <div>
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </div>
    </div>
)
}
export default ReduxUser