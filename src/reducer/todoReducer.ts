import { add, del } from "../action/Costant"
import { actionType, todotype } from "../utilits"

//this is my reducer function
export function reducer(state:todotype,action:actionType):todotype
{
   if(action.type==add)
   {
    return {...state,todo:[...state.todo,action.payload]}
   }
   else if(action.type==del)
   {
    let afterDeleteData=state.todo.filter((item)=>{
      return item.id !=action.payload
    })
    return {...state,todo:afterDeleteData}
   }
   else{
    return state
   }
}