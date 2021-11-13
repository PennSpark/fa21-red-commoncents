import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../App";
import plant1 from "./plant1.svg";

const Home = () => {
    return (
        <div class="home-container">
            <div class="desktop-1">
                <div class="intro-container">
                    <div class="greeting-container">
                        <h1>Common Cents</h1>
                        <p>Financial freedom within the reach of every student</p>
                        <p>Empowering students to manage their money and reach financial independence.</p>
                    </div>
                    <img src={plant1} alt="Potted plant" />
                </div>

                <div class="mission">
                    <p>We are a tech-enabled nonprofit empowering students with the knowledge
                        to manage their money and reach financial independence</p>
                </div>
            </div>

            <div class="desktop-2">
                <h2><u>Our Impact</u></h2>
                <div class="impact-container">
                    <Impact number="20" text="Members" />
                    <Impact number="30" text="Chapters" />
                    <Impact number="40" text="Students Taught" />
                </div>
                <div class="footnote-container">
                    <p>*Learn more about our purpose and impact <a href="/about"><u>here</u></a></p>
                </div>

                <h2><u>Our Partners</u></h2>
                <div class="carousel-container">
                    <a class="arrow" onclick="plusSlides(-1)">&lt;</a>
                    <div class="impact-container">
                        <Partner text="Spark" />
                        <Partner text="Google" />
                        <Partner text="FB" />
                    </div>
                    <a class="arrow" onclick="plusSlides(1)">&gt;</a>
                </div>
            </div>

            <div class="desktop-3">
                <p>Something about us being a non-profit</p>
            </div>
        </div>
    );
};

function Impact(props) {
    const number = props.number;
    const text = props.text;
    return (
        <div class="impact-box">
            <p class="number"> {number} </p>
            <p class="text"> {text} </p>
        </div>
    );
}

function Partner(props) {
    const text = props.text;
    return (
        <div class="partner-box">
            <p class="text"> {text} </p>
        </div>
    );
}

/*

var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

// Images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
}

*/

export default Home;
