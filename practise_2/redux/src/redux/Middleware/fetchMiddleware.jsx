import { userActions } from "../UserSlice";

const fetchUserMiddleware = (params) =>{
    return async (dispatch) =>{
        try{
            dispatch(userActions.onPending());
            const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`);
            const userData = await userResp.json();
            dispatch(userActions.onFulfilled(userData));
        }catch(err){
            dispatch(userActions.onRejected(err));
        } 
    }
}

export default fetchUserMiddleware;