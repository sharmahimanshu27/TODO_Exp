import { Box, Button, Divider, Stack, TextField } from '@mui/material'
import React, { createContext, useContext, useReducer, useState } from 'react'
import List from './List'
import { singleTodo } from '../utilits'
import { useTodo } from '../context/TodoContext'
function Todo() {
  let [text,setText]=useState<string>('')
  let x=useTodo()
  
  function textHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    setText(event.target.value)
  }
  function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
  {
    let obj:singleTodo={
      id:Math.random(),
      text:text
    }
    x?.addHandler(obj)
    setText('')
  }
 
  return (
     <>

     <Stack direction='column' spacing={2}>
        <Box sx={{padding:"8px" }}>
          <TextField label="Enter your msg" variant='outlined' helperText={text?'redy to go':'add some text'} value={text} onChange={textHandler} error={!Boolean(text)}/>
          <Button variant='contained' color='secondary' onClick={clickHandler}>ADD</Button>
        </Box>
     
     </Stack>
     <Divider orientation='horizontal' />
     <List todo={x?.todo}/>
     
     </>
  )
}


export default Todo