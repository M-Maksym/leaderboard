import React, { useState } from 'react';
import './Registration.css';
import eye from './eye.png';
import eye_off from './eye-off-outline.png';


function addUser(credentials) {                   //registration
  return fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(credentials)
  })
  .then(res => res.json())
}


const showMessageConsole = (mes) =>{
  console.log(mes);
}


export default function Registration() {
  const [login, setLogin] = useState();                     //login
  const [password, setPassword] = useState();               //password
  const [repeatPassword, setRepeatPassword] = useState();   //repeat password
  const [name, setName] = useState();                       //name
  const [surname, setSurname] = useState();                 //surname
  const [nickname, setNickname] = useState();               //nickname
  const [age, setAge] = useState();         //age
  const [showPassword, setShowPassword] = useState(false);
  const [messager, setMessage] = useState(""); 
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== repeatPassword) {
      console.error('Passwords do not match');
      return;
    }

  }
  // eslint-disable-next-line
  let message;
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
 }
 // eslint-disable-next-line
 const showMessage = (messager) => {

  setMessage(messager)};


 return(
  
    <div className="registration-wrapper">
      
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label className='firstString'>
          <div className='firstString_name'>
            <p className='text'>Name</p>
            <input type="text" onChange={e => setName(e.target.value)} />
          </div>
          <div className='firstString_surname'>
            <p className='text'>Surname</p>
            <input type="text" onChange={e => setSurname(e.target.value)} />
          </div>
        </label>

        <label className='secondString'>
          <div className='secondString_nickname'>
            <p className='text'>Nickname</p>
            <input type="text" onChange={e => setNickname(e.target.value)} />
          </div>
            <div className='secondString_dateOfBirth'>
              <p className='text'>Age</p>
              <input type="text" onChange={e => setAge(e.target.value)} />
            </div>
        </label>
        
        <div className='loginAndPassword'>
          <label className='login'>
            <p className='text'>Login</p>
            <input type="text" className = 'registrationInput' onChange={e => setLogin(e.target.value) } />
          </label>

          <label className='password'>
            <p className='text'>Password</p>
            <passwordr>
              <input type={showPassword ? 'text' : 'password'} className="Passwordr" onChange={e => setPassword(e.target.value)} />
              <button type="button" className='eye' onClick={handlePasswordVisibility}>
                {showPassword ? 
                          <img src={eye_off} alt="Eye" className="Pass_eye" /> 
                          :<img src={eye} alt="Eye" className="Pass_eye" /> }
              </button>
            </passwordr>
          </label>

          <label className='password'>
            <p className='text'>Repeat password</p>
            <passwordr>
              <input type={showPassword ? 'text' : 'password'} onChange={e => setRepeatPassword(e.target.value)} className='Passwordr'/>
              <button type="button" className='eye' onClick={handlePasswordVisibility}>
                {showPassword ? 
                        <img src={eye_off} alt="Eye" className="Pass_eye" /> 
                        :<img src={eye} alt="Eye" className="Pass_eye" /> }
              </button>
            </passwordr>
          </label>
        </div>
        <div>
        {messager && (
        <div className="message">
          {messager}
        </div>
      )}
        <button type="create_account" className='create_account'
            onClick={() => {
              message = addUser({
                firstName: name,
                lastName: surname,
                username: nickname,
                age: age,
                email:login,
                password: password
              });
              showMessageConsole(message);
              showMessage("Successfuly, \nyou can come back and log in!\n");              
              }}>
            CREATE ACCOUNT
          </button>
        </div>
      </form>

    </div>
 )
}