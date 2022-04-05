// Инструменты
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddUser } from '../../redux/asyncActionCreators/usersAAC';

// Стили
import style from './Profile.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sprite, setSprite] = useState('male');
  const [seed, setSeed] = useState(0);

  const [check, setCheck] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [message, setMessage] = useState('');

  const spriteValue = useRef();
  const user_login = useRef();
  const user_password = useRef();

  const { errors } = useSelector((state) => state.errorsReducer);
  const { users, isLoading, isLoaded, isFailed } = useSelector(
    (state) => state.usersReducer
  );

  const pickAvatar = (event) => {
    event.preventDefault();
    setSprite(spriteValue.current.value);

    let num = Math.floor(Math.random() * 50);
    setSeed(num);
  };

  const sendForm = async (event) => {
    event.preventDefault();

    const payload = {
      user_login: user_login.current.value,
      user_password: user_password.current.value,
      user_sprite: sprite,
      user_seed: seed,
    };

    try {
      await dispatch(fetchAddUser(payload));
    } catch (error) {
      setMessage(error.response.data.message);
      setPressed(true);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      setCheck(true);
      setMessage(`Welcome, ${users.user_login}!`);
      setPressed(true);
      setTimeout(() => {
        navigate('/game');
      }, 2000);
    }
  }, [isLoaded, setMessage, setCheck, setPressed, navigate]);

  return (
    <div className={style.profileContainer}>
      <div className={style.profileForm}>
        <Buttons />
        <div className={style.profileContainer}>
          <div className={style.addProfileForm}>
            <form onSubmit={sendForm} className={style.formContainer}>
              <div>
                <input
                  ref={user_login}
                  className={style.inputContainer}
                  type="text"
                  name="user_login"
                  placeholder="Login"
                  autoComplete="off"
                  disabled={isLoaded}
                ></input>
                <input
                  ref={user_password}
                  className={style.inputContainer}
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  autoComplete="off"
                  disabled={isLoaded}
                ></input>
                <div>
                  <select
                    ref={spriteValue}
                    className={style.selectContainer}
                    disabled={isLoaded}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="human">Human</option>
                  </select>
                  <button
                    onClick={pickAvatar}
                    className={style.buttonContainer}
                    disabled={isLoaded}
                  >
                    Pick avatar
                  </button>
                </div>
              </div>
              <div>
                <img
                  className={style.imgContainer}
                  src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`}
                />
              </div>
              <div>
                <button
                  className={style.buttonContainer}
                  type="submit"
                  disabled={isLoaded}
                >
                  Create
                </button>
              </div>
            </form>
            {(isLoaded || isFailed) && (
              <Alert check={check} message={message} />
            )}
            {isLoaded && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
