import { myAxios } from "./helper";

export const signup=(user)=>{
return myAxios.post('/user/addinfo',user).then((response)=>{
    return response.data
})
}