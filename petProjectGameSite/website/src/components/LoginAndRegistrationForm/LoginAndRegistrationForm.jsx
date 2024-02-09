import React, { useState }from 'react';
import  Login  from './Login/Login';
import  Register  from './Register/Register';
import './LoginAndRegistrationForm.css'



const LoginAndRegistrationForm = () => {
    const [currentForm, setCurrentForm ] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };

    return (
        <div className='LoginAndRegistrationForm'>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
};

export default LoginAndRegistrationForm;