import React, { useState } from 'react';
import { withTheme } from 'styled-components';

function Quiz() {

    const boardStyle = {
        // position: 'absolute',
        width: 1167,
        height: 487,
        // marginLeft: 136,
        marginTop: 100,

        backgroundColor: '#B7DFFA',
        borderRadius: 30
    }

    const topicStyle = {
        position: 'relative',
        width: 213,
        height: 16,
        left: 950,
        top: 20,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 45,
        lineHeight: 16,
        /* identical to box height, or 36% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

        color: '#000000'
    }

    const questionStyle = {
        position: 'relative',
        width: 700,
        height: 50,
        left: 70,
        top: 35,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 30,
        /* identical to box height, or 36% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',

        color: '#000000'
    }

    const answerStyle = {
        position: 'relative',
        width: 500,
        height: 250,
        top: 60,
        left: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const buttonStyle = {
        width: 500,
        height: 50,
        borderRadius: 30,
    }

    const scoreStyle = {
        position: "relative",
        width: 300,
        height: 5,
        left: 70,
        top: 0,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 20,
    }

    const leftButtonStyle = {
        position: "relative",
        top: 320,
        left: 25,
        width: 70,
        height: 70,
        fontWeight: 500,
        fontSize: 60,
        backgroundColor: 'white',
        border: "none"
    }

    const rightButtonStyle = {
        position: "relative",
        top: 320,
        right: 25,
        width: 70,
        height: 70,
        fontWeight: 500,
        fontSize: 60,
        backgroundColor: 'white',
        border: "none"
    }

    const overallStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


    const questions = [
		{
			questionText: 'What is 1 + 1?',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '82', isCorrect: false },
			],
		},
		{
			questionText: 'What is 3 * 4?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '93029432', isCorrect: false },
				{ answerText: 'Undefined', isCorrect: false },
			],
		},
		{
			questionText: 'What is 0 * 9?',
			answerOptions: [
				{ answerText: '0', isCorrect: true },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
			],
		},
		{
			questionText: 'What is 4?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
	];

    
    
    const TopicTitle = "Finance"
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
	};

    const handlePrevOptionClick = () => {
		const prevQuestion = currentQuestion - 1;
		if (prevQuestion >= 0) {
			setCurrentQuestion(prevQuestion);
		}
	};

    const handleNextOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
	};

    return(
        <div style = {overallStyle}>
            <button style = {leftButtonStyle} onClick={() => handlePrevOptionClick()}>
                &lt;
            </button>
            <div style = {boardStyle}>
                <h2 style = {topicStyle}>{TopicTitle}</h2>
                <div style = {scoreStyle}>Current Score: {score}</div>
                <div style = {questionStyle}>
                    <p>Question {currentQuestion + 1}: {questions[currentQuestion].questionText}</p>
                </div>
                <div className='answer-section' style = {answerStyle}>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button style = {buttonStyle} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} >{answerOption.answerText}</button>
                    ))}
                </div>
            </div>
            <button style = {rightButtonStyle} onClick={() => handleNextOptionClick()}>
                &gt;
            </button>
        </div>
    )
}

export default Quiz;