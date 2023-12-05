import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Login.css';
import eye from './eye.png';
import eye_off from './eye-off-outline.png';


async function loginUser(credentials) {
 return fetch('https://dummyjson.com/auth/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())

}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
 }

 return(
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          <p className='text'>login</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className='text'>password</p>
          <password>
            <input type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} className='Password'/>
            <button type="button" className='eye' onClick={handlePasswordVisibility}>{showPassword ? <img src={eye_off} alt="Eye" className="Pass_eye" /> :<img src={eye} alt="Eye" className="Pass_eye" /> }</button>

          </password>
        </label>
        <Link to="/registration" style={{ textDecoration: 'none' }}>
                <h2 className="registration" >You haven`t account?</h2>
            </Link>
        <div>
          <button type="sign_in" className='sign_in'>Sign In</button>
        </div>
      </form>
    </div>
 )
}

Login.propTypes = {
 setToken: PropTypes.func.isRequired
};