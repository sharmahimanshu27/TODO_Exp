import { singleTodo } from "../utilits";
import { add, del } from "./Costant";

export function addActionCreator(arg:singleTodo)
{
    return { type:add,payload:arg}
}
export function deleteActionCreator(id:number)
{
    return {type:del,payload:id}
}