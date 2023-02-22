import React,{useState} from 'react'
import './Login.css'
import {auth} from './firebase.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import { login } from './features/appSlice'


const Login = () => {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const dispatch = useDispatch()  

  const register = (e) => {
    e.preventDefault()
    if (!name) {
      return alert('Please Enter Full Name!')
    } else {
      createUserWithEmailAndPassword(auth,email,password)
      .then(authUser => {
      updateProfile(authUser.user, {
        displayName:name
      })
      .then(() => {
        dispatch(login({
          username:name,
          id:authUser.user.uid,
          email:authUser.user.email
          }))
        })
      })
      .catch(err => alert(err.message))
    }
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(authUser => {
      dispatch(login({
        username:authUser.user.displayName,
        id:authUser.user.uid,
        email:authUser.user.email
      }))
    })
    .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
        {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a1dc92ca-091d-4ca9-a05b-8cd44bbfce6a/f9368347-e982-4856-a5a4-396796381f28/RS-en-20191230-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        <form>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)'/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
            <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} type="password" />
            <button type='submit' onClick={signIn}>Sign In</button>
        </form>
        <button className="login__register" onClick={register}>Register</button>
            
    </div>
  )
}

export default Login