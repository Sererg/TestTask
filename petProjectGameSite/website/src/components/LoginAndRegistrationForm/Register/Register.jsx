import React, { useState} from 'react';
import axios from 'axios';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.length === 0){
            alert("Name has left Blank!");
          }
          else if(password.length === 0){
            alert("Password has left Blank!");
          }
          else if(email.length === 0){
            alert("Email has left Blank!");
          }
          else {
            const url = 'http://localhost/test/formsubmit.php';
          }
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='full Name'/>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder='********' id='password' name='password' />
            <button type='submit' onClick={handleSubmit}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Если у вас есть учетная запись, нажмите здесь.</button>
    </div>
    );
};

export default Register;