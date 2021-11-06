import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { userContext } from '../App'

const Footer = () => {
    const {state, dispatch} = useContext(userContext)
    const navigate = useNavigate()
    return (
        <div class="footer-wrapper">
            
        </div>
      
    )
}

export default Footer;
