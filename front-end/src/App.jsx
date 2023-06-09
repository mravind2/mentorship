import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import HomePage from './pages/HomePage';
import RegisterPage from './login/RegisterPage';
import MentorPage from './pages/MentorPage';
import AccountPage from './pages/AccountPage';
import NotFound from './landing/NotFound';
import MenteeLogin from './login/MenteeLogin';
import MentorLogin from './login/MentorLogin';
import CompanyLogin from './login/CompanyLogin';
import MentorRegister from './login/MentorRegister';
import CompanyRegister from './login/CompanyRegister';
import CompanyPage from './pages/CompanyHome';
import MentorHome from './pages/MentorHome';
import CompanyLogout from './pages/CompanyLogout';
import MentorProfile from './pages/MentorProfile';
import MentorProfilePage from './pages/MentorProfilePage'
import MentorAccount from './pages/MentorAccount'
import MentorLogout from './pages/MentorLogout'
import MenteeFilter from './pages/MenteeFilter';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function App() {
  return (
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
      <Route path="*" element={<NotFound />} />
      <Route path="/company-home" element={<CompanyPage />} />
      <Route path="/company-logout" element={<CompanyLogout />} />
      <Route path="/mentor-home" element={<MentorHome />} />
      <Route path="/mentor-profile-page" element={<MentorProfilePage />} />
      <Route path="/mentor-logout" element={<MentorLogout />} />
      <Route path="/mentor-account/:subpage?" element={<MentorAccount />} />
      <Route path="/mentor-account/:subpage/:action" element={<MentorAccount />} />

      <Route path="/mentor/:mentorId" element={<MentorProfile />} />
      <Route path="/mentee-browsing" element={<MenteeFilter />} />
    </Routes>
  );
}

export default App;
