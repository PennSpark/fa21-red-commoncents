import React, {useEffect, useState, useContext} from 'react'
import { userContext } from '../../App'
import speechbubble from "./speechbubble.png"
import campuschapters from "../images/campus-chapters.jpg"
import studentevents from "../images/student-events.png"
import productsuggestions from "../images/product-suggestions.png"
import person1 from "../images/person1.png"
import person2 from "../images/person2.png"
import person3 from "../images/person3.png"
import innovationfund from "../images/Innovation-Fund.png";
import cornellnews from "../images/Cornell-News.png";
import dpnews from "../images/DP-News.png";

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
                        <img src = {campuschapters} alt = "campuschapters" />
                    </div>
                </div>
                <div class = "flex-container">
                    <div class = "purpose-how2-image">
                    <img src = {productsuggestions} alt = "productsuggestions" />
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
                    <img src = {studentevents} alt = "studentevents" />
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
                    <img src = {person1} alt = "person1" />
                    </div>
                </div>
                <div class = "flex-container1">
                    <div class = "person">
                    <img src = {person2} alt = "person2" />    
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
                    <img src = {person3} alt = "person3" />  
                    </div>
                </div>
            </div>
            <div class = "desktop-15">
                <div class = "awards-container">
                    <div class = "our-awards">
                        <h1>Our Awards</h1>
                    </div>
                    <div class = "flex-container2">
                        <div class = "award-image">
                            <img class = "recognition" src = {innovationfund} alt = "innovationfund" />
                        </div>
                        <div class = "award-image">
                            <img class = "recognition" src = {cornellnews} alt = "cornellnews" />
                        </div>
                        <div class = "award-image">
                            <img class = "recognition" src = {dpnews} alt = "dpnews" />
                        </div>
                    </div>
                </div>
            </div>
            <div class = "desktop-16">
                <div class = "upper-container">
                        <div class = "learn-about">
                            <h1>Learn about our...</h1>
                        </div>
                        <div class = "board-of-directors">
                            <p>Board of Directors</p>
                        </div>
                </div>
                <div class = "lower-container">
                    <div class = "donate-text">
                        <p> Something about us being a non profit and how being a partner will help us achieve our mission</p>
                    </div>
                    <div class = "donate-button">
                        <p>Donate Today</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About