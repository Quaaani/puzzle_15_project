// Инструменты
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Стили
import style from './App.module.css';

// Компоненты
import Main from '../Main/Main';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/game' element={<Profile />} />
          <Route path='/pictures' element={<Profile />} />
          {/* <Route path="*" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
