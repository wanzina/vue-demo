import {VIEW_LOADING,CHECK_USER,CHECK_USERS} from './types';

let mutations={
    [VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
    [CHECK_USER]:(state,payload)=>{state.user.auth=payload.user;},
    [CHECK_USERS]:(state,payload)=>{state.user.auth=payload}
}
export default mutations