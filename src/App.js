import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WheelPage from './Pages/WheelPage'

import './App.css';
import HomePage from './Pages/HomePage';
import ConfigPage from './Pages/ConfigPage';

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
