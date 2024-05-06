import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import FullTodo from '../FullTodo/FullTodo'
import Login from '../Login/Login'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='' element = {  <Login/>}/>
            <Route path='/todo' element = {  <FullTodo/>}/>
        </Routes>
    </div>
  )
}

export default AllRouter