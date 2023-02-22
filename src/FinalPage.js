import React, { useEffect, useState } from 'react'
import App from './App'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/appSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


const FinalPage = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  

  useEffect(() => {
    onAuthStateChanged(auth,(authUser) => {
      if (authUser) {
        dispatch(login({
          username:authUser.displayName,
          id:authUser.uid,
          email:authUser.email
        }))
      } else {
        dispatch(logout())
      }
    })
  }, []);

  return (
    <div>
        {user ? (
            <App/>
        ):(
            <Login/>
        )}
    </div>
  )
}

export default FinalPage