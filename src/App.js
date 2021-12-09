import React, {useEffect, createContext, useReducer, useContext} from 'react'
import NavBar from './components/Navbar'
import './App.css'
import './About.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Signin from './components/screens/Signin'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import About from './components/screens/About'
import Video from './components/Video'
import Quiz from './Quiz'
import {reducer, initialState} from './reducers/userReducer'

export const userContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const {dispatch} = useContext(userContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({type:"USER", payload:user});
    if (user) {
      navigate('../home');
    } else {
      navigate('/signin');
    }
  }, [dispatch])
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/quiz" element={<Quiz/>} />

        <Route path="/video" element={<Video videoID = "U1XogcoB6uw" coinReward = "20"/>} />
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
    </BrowserRouter>
    </userContext.Provider>
    
  );
}
export default App;