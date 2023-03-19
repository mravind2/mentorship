import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './login/RegisterPage';
import MentorPage from './pages/MentorPage';
import AccountPage from './pages/AccountPage';
import { UserContextProvider } from './UserContext';

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true;


function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mentors" element={<MentorPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
