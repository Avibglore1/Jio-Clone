import React, { useEffect } from 'react'
import { fetchUserMalware } from './fetchUserMiddleware'
import { useDispatch, useSelector } from 'react-redux'
function ReduxUser() {
    const {loading, user, error} = useSelector((store) =>{
        return store.UserSlice
    })
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchUserMalware())
    },[])
    if(loading){
      return <div>..Loading</div>
    }
    if(error){
      return <div>Error :{error.message}</div>
    }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw'
    }}>
      <div>
          <h4>Name : {user.name}</h4>
          <p>Phone : {user.phone}</p>
      </div>
    </div>
  )
}

export default ReduxUser