import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Avatar } from '@mui/material'
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase'
import {logout,selectUser} from '../../features/appSlice'
import {useDispatch, useSelector} from 'react-redux'

const NavBar = () => {
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);
  
  const sign_Out = (e) => {
    e.preventDefault()
    signOut(auth)
    .then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__left">
        <Avatar className="nav__avatar">
        </Avatar>
        <h4>{user.username}</h4>
      </div>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <button onClick={sign_Out} className="nav__logoutButton">
          <p>Logout</p>
      </button>
    </div>
  );
};

export default NavBar;
