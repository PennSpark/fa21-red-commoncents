import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { userContext } from '../App'

const NavBar = () => {
    const {state, dispatch} = useContext(userContext)
    const navigate = useNavigate()
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to= {state ? "/home" : "/signin"} className="brand-logo left">common cents</Link>
                <ul class="right hide-on-med-and-down">
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/learn">LEARN</Link></li>
                    <li><Link to="/start">START</Link></li>
                    <li><Link to="/chapters">CHAPTERS</Link></li>
                    <li><Link to="/profile"><i className="material-icons">person_outline</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;