import React, {useState, useContext, useEffect, useRef, createRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { userContext } from '../../App';
import axios from 'axios';
import M from 'materialize-css'

const Signin = () => {
    const [mode, setMode] = useState(true)
    const {dispatch} = useContext(userContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const [gradYear, setGradYear] = useState("")
    const renderList = () => {
        console.log(mode);
        if (mode) {
            return [
                <div class = "input-area">
                     <div class = "row">
                        <input
                        type = "text"
                        placeholder = "email"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        />
                        <input
                        type = "password"
                        placeholder = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        />
                        <button className="btn"
                        onClick = {() => Signin()}>
                            Sign in
                        </button>
                    </div>
                </div>
            ]
        } else {
            return [
                <div class = "input-area">
                    <div class = "row">
                        <input
                        type = "text"
                        placeholder = "email"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        />
                        <input
                        type = "password"
                        placeholder = "password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class = "row">
                        <input
                        type = "text"
                        placeholder = "first name"
                        value = {firstName}
                        onChange = {(e) => setFirstname(e.target.value)}
                        />
                        <input
                        type = "text"
                        placeholder = "last name"
                        value = {lastName}
                        onChange = {(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div class = "row">
                        <input
                        type = "text"
                        placeholder = "gender"
                        value = {gender}
                        onChange = {(e) => setGender(e.target.value)}
                        />
                        <input
                        type = "text"
                        placeholder = "school"
                        value = {school}
                        onChange = {(e) => setSchool(e.target.value)}
                        />
                    </div>
                    <div class = "row">
                        <input
                        type = "text"
                        placeholder = "major/concentration"
                        value = {major}
                        onChange = {(e) => setMajor(e.target.value)}
                        />
                        <input
                        type = "text"
                        placeholder = "graduation year"
                        value = {gradYear}
                        onChange = {(e) => setGradYear(e.target.value)}
                        />
                    </div>
                    
                    <button className="btn"
                    onClick = {() => Signup()}>
                        Join Now
                    </button>
                </div>
            ]
        }
    }
    const Signup = () => {
        const url = "https://young-savannah-91729.herokuapp.com/users/signup"
        const credentials = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            school: school,
            major: major,
            gradYear: gradYear
        }
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            if (result.error) {
                M.toast({html: result.error})
            } else {
                M.toast({html: result.message})
                navigate('../home')
            }
            })
            .catch((error) => {
                console.log(error)
        });
    };
    const Signin = () => {
        const url = "https://young-savannah-91729.herokuapp.com/users/signin"
        const credentials = {
            username: username,
            password: password
        }
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            if (result.error) {
                M.toast({html: result.error})
            } else {
                localStorage.setItem("jwt", result.token)
                localStorage.setItem("user",JSON.stringify(result.user))
                dispatch({type:"USER", payload: result.user})
                M.toast({html: result.message})
                navigate('../home')
            }
            })
            .catch((error) => {
                console.log(error)
        });
    };
    return (
        <div class = "text-container">
            <h1>CC Profile</h1>
            <h4>Begin your financial independence journey by
            making a CC Profile. You can redeem prizes through
            earning CC coins. Sign up today!</h4>
            <div class = "tab-group">
                <div class = "sign-in-tab"
                     style={{backgroundColor: mode ? "#b7dffa" : "#ffffff"}}
                     onClick = {(e) => setMode(true)}
                     >
                     Sign in
                </div>
                <div class = "create-account-tab" 
                     style={{backgroundColor: mode ? "#ffffff" : "#b7dffa"}}
                     onClick = {(e) => setMode(false)}
                     >
                     Create Account 
                </div>
            </div>
            {renderList()}
            
        </div>
        
    )
}

export default Signin