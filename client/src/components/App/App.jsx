// Инструменты
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Компоненты

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

      <Routes>
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="*" element={< />} /> */}
      </Routes>

    </BrowserRouter>
  </Provider>
  );
}

export default App;
