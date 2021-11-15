import React, {useEffect, createContext, useReducer, useContext, useState} from 'react'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import {BrowserRouter, Switch, Route, Routes, useNavigate} from 'react-router-dom'
import Signin from './components/screens/Signin'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import About from './components/screens/About'
import {reducer, initialState} from './reducers/userReducer'

export const userContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const {dispatch} = useContext(userContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    dispatch({type:"USER", payload:user})
    // if (user) {
    //   console.log(user)
    //   navigate('../home')
    // } else {
    //   navigate('../signin')
    // }
  }, [dispatch, navigate])
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <userContext.Provider value = {{state, dispatch}}>
      <BrowserRouter>
      <NavBar/>
      <Routing/>
      <Footer/>
    </BrowserRouter>
    </userContext.Provider>
    
  );
}
export default App;