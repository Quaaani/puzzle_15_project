// Инструменты
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// Стили
import style from './Login.module.css'

// Компоненты
import Buttons from '../Buttons/Buttons'
import Alert from '../Alert/Alert';
import { initSessionAC } from '../../redux/actionCreators/sessionAC'

function Login(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user_login = useRef()
  const user_password = useRef()

  const [pressed, setPressed] = useState(false)
  const [check, setCheck] = useState(false)
  const [message, setMessage] = useState('')

  const toLogin = (event) => {
    event.preventDefault()

    const login = {
      user_login: user_login.current.value,
      user_password: user_password.current.value
    }

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login)
    }).then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          dispatch(initSessionAC(data.data))
          setCheck(true)
          setMessage(data.message)
          setPressed(true)

          setTimeout(() => {
            navigate('/game')
          }, 2000);
        } else {
          setCheck(false)
          setMessage(data.message)
          setPressed(true)
        }
      })

    
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginForm}>
        <Buttons />
        <div className={style.loginContainer}>
          <form onSubmit={toLogin} className={style.loginFormContainer}>
            <div >
              <input 
                ref={user_login}
                className={style.inputContainer} 
                type="text" 
                name="user_login"
                placeholder="Login"
                autoComplete="off"/>
            </div>
            <div >
              <input 
                ref={user_password}
                className={style.inputContainer} 
                type="password" 
                name="user_password"
                placeholder="Password"
                autoComplete="off"/>
            </div>
            <div>
              <button className={style.buttonContainer}>Login</button>
            </div>
          </form>
        </div>
        {pressed && <Alert check={check} message={message}/>}
      </div>
    </div>
  );
}

export default Login;
