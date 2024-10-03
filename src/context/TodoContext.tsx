import React,{createContext, ReactNode, useContext, useReducer} from 'react'
import {singleTodo,todotype} from '../utilits'
import { reducer } from '../reducer/todoReducer'
import { addActionCreator, deleteActionCreator } from '../action/todoActionCrator'
 type todoContextType={
    addHandler:(arg:singleTodo)=>void,
    deleteHandler:(arg:number)=>void
  }&todotype
  type todoContextFinal={
    children:ReactNode
  }
let todoContext=createContext<todoContextType |null >(null)
function TodoContext({children}:todoContextFinal) {
  let initalState:todotype={
    todo:[]
  }
  let [state,dispatch]=useReducer(reducer,initalState)
  //this is for adding
   function addHandler(arg:singleTodo)
  {
    dispatch(addActionCreator(arg))
  }
  //this is for delete
  function deleteHandler(id:number)
  {
    dispatch(deleteActionCreator(id))
  }
  return <todoContext.Provider value={{...state,addHandler,deleteHandler}}>
          {children}
  </todoContext.Provider>
}

export let useTodo=()=>{
  return useContext(todoContext)
}
export default TodoContext