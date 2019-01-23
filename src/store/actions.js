import axios from 'axios';

import * as types from './types';

let actions = {
    
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
    [types.CHECK_USER]:({commit,state},payload)=>{
        return axios({
            url:'/data/user.json',
           
          }).then(
            res=>{
                
              if(payload.username==res.data[0].username&&payload.password==res.data[0].password){
                 
                commit({type:types.CHECK_USER,user:true})//-> mu ..sta
                
              }else{
                commit({type:types.CHECK_USER,user:false})
              }
            
            }
          )
    }

}
export default actions;