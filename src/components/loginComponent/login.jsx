import './login.css'; 
import { ButtonInLoginForm } from '../buttons/buttonInLoginForm/buttonInLoginForm';
import { Link } from 'react-router-dom'
import { useState } from 'react'


/* export const Login = () => {

    return (
        <div className='wrapper_for_login_form'>
            <div className='login_form'>
                <h1>Вход</h1>
                <input className='input_login'
                   
                    name='email'
                    type='email'
                    placeholder='введите почтовый ящик'
                    
                    ></input> 
                   
                <input className='input_login'
                    
                    name='password'
                    type='password'
                    placeholder='введите пароль'
                  
                    ></input>
                    <ButtonInLoginForm/>
                    <p className='text_with_link'>Нет аккаунта? <Link to='/register'>Создать</Link></p>
            </div>
        </div>
    )
} */


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    return (
        <div className="wrapper_for_login_form">
            <h1>Вход</h1>
            <input
            className="input_login"
            name="email"
            type="email"
            placeholder="введите почтовый ящик"
            value={email}
            onChange={handleEmailChange}
            />
            <input
            className="input_login"
            name="password"
            type="password"
            placeholder="введите пароль"
            value={password}
            onChange={handlePasswordChange}
            />
        <div className='loginBtn'>
            <ButtonInLoginForm/>
            <p className='text_with_link'>Нет аккаунта? <Link to='/register'>Создать</Link></p>
        </div>
    </div>
    )
}