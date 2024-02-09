import React, { useState} from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
    }
    return (
        <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input type="text" value={name} name='name' id='name' placeholder='full Name'/>
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
            <label htmlFor="password">password</label>
            <input value={password} type="password" placeholder='********' id='password' name='password' />
            <button type='submit'>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Если у вас есть учетная запись, нажмите здесь.</button>
    </div>
    );
};

export default Register;