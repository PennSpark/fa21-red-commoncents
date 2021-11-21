import React, {useEffect, useState, useContext} from 'react'
import { userContext } from '../App'
import speechbubble from "./speechbubble.png"

const About = () => {
    return (
        <div class = "about-container">
            <div class = "desktop-11">
                <div class = "our-purpose">
                    <h1>Our Purpose</h1>
                    <p>A tech-enabled nonprofit empowering students with the knowledge to manage their money and reach financial independence</p>
                </div>
                <div class = "purpose-how1">
                    <p> We are redefining financial education through... </p>
                </div>
                <div class = "flex-container">
                    <div class = "purpose-how2">
                        <p>Campus Chapters</p>
                    </div>
                    <div class = "purpose-how2-image">
                        <p>Placeholder</p>
                    </div>
                </div>
                <div class = "flex-container">
                    <div class = "purpose-how2-image">
                        <p>Placeholder</p>
                    </div>
                    <div class = "purpose-how2">
                        <p>Product Suggestions</p>
                    </div>
                </div>
                <div class = "flex-container">
                    <div class = "purpose-how2">
                        <p>User-Centric Resources</p>
                    </div>
                    <div class = "purpose-how2-image">
                        <p>Placeholder</p>
                    </div>
                </div>
            </div>
            <div class = "desktop-12">
                <div class = "our-impact">
                    <h1>Let's Talk About Impact</h1>
                </div>
                <div class = "flex-container1">
                    <div class = "speech-bubble">
                        <img src = {speechbubble} alt = "speechbubble" />
                    </div>
                    <div class = "person">

                    </div>
                </div>
                <div class = "flex-container1">
                    <div class = "person">
                        
                    </div>
                    <div class = "speech-bubble1">
                        <img src = {speechbubble} alt = "speechbubble" />
                    </div>
                </div>
                <div class = "flex-container1">
                    <div class = "speech-bubble">
                        <img src = {speechbubble} alt = "speechbubble" />
                    </div>
                    <div class = "person">

                    </div>
                </div>
                <div class = "flex-container1">
                    <div class = "person">
                        
                    </div>
                    <div class = "speech-bubble1">
                        <img src = {speechbubble} alt = "speech-bubble" />
                    </div>
                </div>
            </div>
            <div class = "desktop-15">
                <div class = "awards-container">
                    <div class = "our-awards">
                        <h1>Our Awards</h1>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About