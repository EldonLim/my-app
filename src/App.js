import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WheelPage from './Pages/WheelPage'

import './App.css';
import HomePage from './Pages/HomePage';
import ConfigPage from './Pages/ConfigPage';

const GOOGLE_MAP_API_KEY = 'AIzaSyCflu0SynaYmHkHWu_ziiQv1SF631w4ONU';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/wheelpage" element={<WheelPage />}></Route>
        <Route path="/configpage" element={<ConfigPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
