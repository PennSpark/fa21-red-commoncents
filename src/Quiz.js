import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import M from 'materialize-css'

function Quiz() {

    const navigate = useNavigate()

    const boardStyle = {
        width: 1167,
        height: 487,
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

    const overallStyle = {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
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
        {
			questionText: 'What is 5?',
			answerOptions: [
				{ answerText: '5', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		}
	];
    
    const TopicTitle = "Finance"
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
            M.toast({html: 'Correct!'})
            setScore(score + 1);
		} else {
            M.toast({html: 'Incorrect!'})
        }
		if (currentQuestion != questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
            if (score >= 4 || (score == 3 && isCorrect)) {
                const user = JSON.parse(localStorage.getItem("user"));
                const url = "https://young-savannah-91729.herokuapp.com/users/changeCoins"
                axios
                .post(url, {id: user._id, coins: 5})
                .then((response) => {
                        M.toast({html: response.data.message});
                    })
                    .catch((error) => {
                        console.log(error);
                }); 
            }
            navigate('../home');
        }
	};

    return(
        <div style = {overallStyle}>
            <div style = {boardStyle}>
                <h2 style = {topicStyle}>{TopicTitle}</h2>
                <div style = {questionStyle}>
                    <p>Question {currentQuestion + 1}: {questions[currentQuestion].questionText}</p>
                </div>
                <div className='answer-section' style = {answerStyle}>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button style = {buttonStyle} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} >{answerOption.answerText}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quiz;