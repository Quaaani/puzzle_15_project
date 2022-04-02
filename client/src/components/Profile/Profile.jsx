// Инструменты
import React, { useRef, useState } from 'react';

// Стили
import style from './Profile.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';

function Profile(props) {

  const [sprite, setSprite] = useState('male')
  const [seed, setSeed] = useState(0)
  const spriteValue = useRef()

  const pickAvatar = (event) => {
    event.preventDefault()
    setSprite(spriteValue.current.value)

    let num = Math.floor(Math.random() * 50)
    setSeed(num)
  }

  return (
    <div className={style.profileContainer}>
      <div className={style.profileForm}>
        <Buttons />
        <div className={style.profileContainer}>
          <div className={style.addProfileForm}>
            <form className={style.formContainer}>
              <div>
                <input
                  className={style.inputContainer}
                  type="text"
                  name="user_login"
                  placeholder="Login"
                ></input>
                <input
                  className={style.inputContainer}
                  type="password"
                  name="user_password"
                  placeholder="Password"
                ></input>
                <div>
                <select ref={spriteValue} className={style.selectContainer}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="human">Human</option>
                </select>
                <button onClick={pickAvatar} className={style.buttonContainer}>Pick avatar</button>
                </div>
              </div>
              <div>
                <img 
                className={style.imgContainer}
                src={`https://avatars.dicebear.com/api/${sprite}/${seed}.svg`}></img>
              </div>
              <div>
                <button 
                  className={style.buttonContainer}
                  type='submit'
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
