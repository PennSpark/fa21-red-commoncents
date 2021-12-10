import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { userContext } from '../App'

const NavBar = () => {
    const {state} = useContext(userContext)
    const navigate = useNavigate()
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to= {state ? "/" : "/signin"} className="brand-logo left">common cents</Link>
                <ul class="right hide-on-med-and-down">
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/quiz">LEARN</Link></li>
                    <li><Link to="/video">START</Link></li>
                    <li><Link to="/chapters">CHAPTERS</Link></li>
                    <li><Link to="/profile"><i className="material-icons">person_outline</i></Link></li>
                    <li>
                        <button className="btn"
                            onClick = {() => {
                                navigate('../')
                            }}>
                        DONATE
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;