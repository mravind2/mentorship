import React from 'react';
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import HomePage from './pages/HomePage';
import RegisterPage from './login/RegisterPage';
import MentorPage from './pages/MentorPage';
import AccountPage from './pages/AccountPage';
import { UserContextProvider } from './UserContext';
import NotFound from './landing/NotFound';
import MenteeLogin from './login/MenteeLogin';
import MentorLogin from './login/MentorLogin';
import CompanyLogin from './login/CompanyLogin';
import MentorRegister from './login/MentorRegister';
import CompanyRegister from './login/CompanyRegister';
import CompanyPage from './pages/CompanyHome';
import MentorHome from './pages/MentorHome';
import CompanyLogout from './pages/CompanyLogout';
import MenteeBrowsing from './pages/MenteeBrowsing';
import MentorAccountPage from './pages/MentorAccountPage';





axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mentor-register" element={<MentorRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/login" element={<MenteeLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mentors" element={<MentorPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/company-home" element={<CompanyPage />} />
        <Route path="/company-logout" element={<CompanyLogout />} />
        <Route path="/mentor-home" element={<MentorHome />} />
        <Route path="/mentor/:mentorId" element={<AccountPage />} />
        <Route path="/mentee-browsing" element={<MenteeBrowsing />} />
        <Route path="/mentor-account-page" element={<MentorAccountPage />} />
      

        {/* The above Route with a path of * will match any path that is not matched by previous routes */}
      </Routes>
    </UserContextProvider>
  );
}

export default App;
