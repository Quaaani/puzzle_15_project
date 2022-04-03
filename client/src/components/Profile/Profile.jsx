// Инструменты
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAC } from '../../redux/actionCreators/usersAC'
import { initSessionAC } from '../../redux/actionCreators/sessionAC';

// Стили
import style from './Profile.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';
import Alert from '../Alert/Alert';

function Profile(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [sprite, setSprite] = useState('male');
  const [seed, setSeed] = useState(0);

  const [check, setCheck] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [message, setMessage] = useState('')

  const spriteValue = useRef();
  const user_login = useRef();
  const user_password = useRef();

  const pickAvatar = (event) => {
    event.preventDefault();
    setSprite(spriteValue.current.value);

    let num = Math.floor(Math.random() * 50);
    setSeed(num);
  };

  const sendForm = (event) => {
    event.preventDefault();

    fetch('/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_login: user_login.current.value,
        user_password: user_password.current.value,
        user_sprite: sprite,
        user_seed: seed,
      }),
    })
      .then((res) => res.json())
      .then((data) => { 
        if (data.status === 400) {
          setCheck(false)
          setMessage(data.message)
          setPressed(true)
        } else {
          dispatch(addUserAC(data.data))
          dispatch(initSessionAC(data.data))

          setCheck(true)
          setMessage(data.message)
          setPressed(true)

          setTimeout(() => {
            navigate('/game')
          }, 2000);
        }
      })
      .catch(err => console.log('Error =>', err.message))
    

  };

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
                ></input>
                <input
                  ref={user_password}
                  className={style.inputContainer}
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  autoComplete="off"
                ></input>
                <div>
                  <select ref={spriteValue} className={style.selectContainer}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="human">Human</option>
                  </select>
                  <button
                    onClick={pickAvatar}
                    className={style.buttonContainer}
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
                <button className={style.buttonContainer} type="submit">
                  Create
                </button>
              </div>
            </form>
            {pressed && <Alert check={check} message={message}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
