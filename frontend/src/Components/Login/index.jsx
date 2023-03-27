import React, { useState } from 'react';
import "./styles.css";
import axios from "axios";


const LoginBlock = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');

    if (value.length < 8 || !/[A-Z]/.test(value) ||!/\d/.test(value) ||
        !/[!@#$%^&*()_+={}\[\]:;<>?,./~\-]/.test(value)) {
        setPasswordError(
          'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one symbol'
        );
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v0.0.1/login', {
      email: email,
      password: password
    }, {
      headers: {
        'content-type': 'application/json',
        'Accept' : 'application/json',
      }
    })
    .then(response => {
      localStorage.setItem('user_id', JSON.stringify(response.data.user.id));
      localStorage.setItem('token', response.data.token);
      console.log("it works")
      // window.location.href = '/userprofile.html';               // change later to redirect user to another page
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="login-block">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} autoComplete="off"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} autoComplete="off"/>
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit">Login</button>
        <p>Don't Have an Account? <a>Sign Up Here</a></p>
      </form>
    </div>
  );
};

export default LoginBlock;