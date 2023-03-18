import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './login/RegisterPage';

axios.defaults.baseURL = 'http://localhost:3001'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
