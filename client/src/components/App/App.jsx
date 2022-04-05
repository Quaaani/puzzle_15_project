// Инструменты
import { store } from '../../redux/store';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Стили
import style from './App.module.css';

// Компоненты
import Main from '../Main/Main';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Game from '../Game/Game';
import Login from '../Login/Login'
import Pictures from '../Pictures/Pictures';
import Example from '../Example/Example'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/game' element={<Game />} />
          <Route path='/pictures' element={<Pictures />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/example' element={<Example />} /> */}
          {/* <Route path="*" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
