import React from 'react'
 
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { singleTodo } from '../utilits'
import { useTodo } from '../context/TodoContext'
type listProps={
  todo:singleTodo[]
}
function List({todo}:any) {
  let x=useTodo()
  
  return (
      <Stack spacing={2} direction={'column'}>
        <>
        {todo.length==0 && 'no data'}
          {todo.map((item:any,i:any)=>{
            return  <Card sx={{ minWidth: 275 }}>
            <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Word of the Day  {i +1}
          </Typography>
          <Typography variant="body2">
             {item.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='error' onClick={()=>{
            x?.deleteHandler(item.id)
          }}>Delete</Button>
        </CardActions>
             </Card>
          })}
          </>
      </Stack>
  )
}

export default List