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
        left: 900,
        top: 20,

        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 450,
        fontSize: 40,
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

        fontFamily: 'sans-serif',
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
        justifyContent: 'flex-start',
    }

    const buttonStyle = {
        width: 500,
        height: 50,
        borderRadius: 30,
        marginTop: 20,
        backgroundColor: "white"
    }

    const overallStyle = {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }

    const questions = [
		{
			questionText: 'Not everyone with income needs a budget.',
			answerOptions: [
				{ answerText: 'TRUE', isCorrect: false },
				{ answerText: 'FALSE', isCorrect: true },
			],
		},
		{
			questionText: 'At least how much of your paycheck should you put towards investing?',
			answerOptions: [
				{ answerText: '5%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '15%', isCorrect: false },
				{ answerText: '20%', isCorrect: true },
			],
		},
		{
			questionText: 'Which is NOT a good way to keep track of a budget?',
			answerOptions: [
				{ answerText: 'Spreadsheets', isCorrect: false },
				{ answerText: 'Budgeting Apps', isCorrect: false },
				{ answerText: 'Envelopes', isCorrect: false },
				{ answerText: 'Memory', isCorrect: true },
			],
		},
		{
			questionText: 'Why is a budget important?',
			answerOptions: [
				{ answerText: 'It is the first step in becoming financially stable', isCorrect: false },
				{ answerText: 'It forces you to be mindful of your money', isCorrect: false },
				{ answerText: 'It allows you to have everything you need, some of what you want, and savings for the future', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
        {
			questionText: 'You have trouble overspending with your credit card. What should you do?',
			answerOptions: [
				{ answerText: 'Get another credit card', isCorrect: false },
				{ answerText: 'Get a personal loan', isCorrect: false },
				{ answerText: 'Use only cash to buy things', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
        {
			questionText: 'Which is a good budeting strategy?',
			answerOptions: [
				{ answerText: 'Pay Yourself First', isCorrect: false },
				{ answerText: 'Envelopes', isCorrect: false },
				{ answerText: 'Zero-Based Budgeting', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
        {
			questionText: 'What is an emergency fund?',
			answerOptions: [
				{ answerText: 'A loan you take out for emergencies', isCorrect: false },
				{ answerText: 'Your set of very safe investments in case the stock market crashes', isCorrect: false },
				{ answerText: 'Cash reserve set aside for unplanned expenses', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
        {
			questionText: 'What does 50/30/20 split mean?',
			answerOptions: [
				{ answerText: 'You spend 50% of your income on your needs, 30% on your wants, and 20% on your savings', isCorrect: true },
				{ answerText: 'You spend 50% of your income on your savings, 30% on your needs, and 20% on your wants', isCorrect: false },
				{ answerText: 'You spend 50% of your income on your needs, 30% on your savings, and 20% on your wants', isCorrect: false },
				{ answerText: 'You spend 50% of your income on your wants, 30% on your needs, and 20% on your savings', isCorrect: false },
			],
		},
        {
			questionText: 'When should you start budgeting for retirement?',
			answerOptions: [
				{ answerText: 'After graduating from college', isCorrect: false },
				{ answerText: 'When you get married', isCorrect: false },
				{ answerText: 'When you get a high-paying job', isCorrect: false },
				{ answerText: 'ASAP', isCorrect: true },
			],
		},
        {
			questionText: 'You should prioritize your needs over wants while saving money for the future.',
			answerOptions: [
				{ answerText: 'TRUE', isCorrect: true },
				{ answerText: 'FALSE', isCorrect: false },
			],
		}
	];
    
    const TopicTitle = "Budgeting"
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
            if (score / questions.length >= 0.8) {
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