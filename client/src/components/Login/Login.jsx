// Инструменты
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosLoginUser } from '../../redux/asyncActionCreators/userAAC';

// Стили
import style from './Login.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

function Login(props) {
  const { user, isLoading, isLoaded, isFailed } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user_login = useRef();
  const user_password = useRef();

  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState('');

  const toLogin = async (event) => {
    event.preventDefault();

    const payload = {
      user_login: user_login.current.value,
      user_password: user_password.current.value,
    };

    try {
      await dispatch(axiosLoginUser(payload));
    } catch (error) {
      console.log('Error Login =>', { ...error });
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      setCheck(true);
      setMessage(`Welcome back, ${user.user_login}!`);
      setTimeout(() => {
        navigate('/game');
      }, 2000);
      localStorage.setItem('login', user.user_login)
    }
  }, [isLoaded, setMessage, setCheck, navigate]);

  return (
    <div className={style.loginContainer}>
      <div className={style.loginForm}>
        <Buttons />
        {!user ? <>
        <div className={style.loginContainer}>
          <form onSubmit={toLogin} className={style.loginFormContainer}>
            <div>
              <input
                ref={user_login}
                className={style.inputContainer}
                type="text"
                name="user_login"
                placeholder="Login"
                autoComplete="off"
                disabled={isLoaded}
              />
            </div>
            <div>
              <input
                ref={user_password}
                className={style.inputContainer}
                type="password"
                name="user_password"
                placeholder="Password"
                autoComplete="off"
                disabled={isLoaded}
              />
            </div>
            <div>
              <button className={style.buttonContainer} disabled={isLoaded}>
                Login
              </button>
            </div>
          </form>
        </div>
        {(isLoaded || isFailed) && <Alert check={check} message={message} />}
        {isLoaded && <Spinner />}
        </> : navigate('/game')}
      </div>
    </div>
  );
}

export default Login;
