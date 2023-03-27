import React, { useState } from 'react';
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterBlock = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError('');

        if (value.length < 8 || !/[A-Z]/.test(value) || !/\d/.test(value) ||
            !/[!@#$%^&*()_+={}\[\]:;<>?,./~\-]/.test(value)) {
            setPasswordError(
                'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one symbol'
            );
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v0.0.1/register', {
            'username': username,
            'email': email,
            'password': password
        }, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(response => {
            if (response.data.status == "success"){
                navigate("/login");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className="register-block">
            <h2>REGISTER</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required/>
                    {passwordError && <div className="error">{passwordError}</div>}
                </div>
                <button type="submit">Register</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default RegisterBlock;