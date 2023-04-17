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
<<<<<<< HEAD
import Notification from './pages/Notification';

=======
import MentorProfile from './pages/MentorProfile';
>>>>>>> 3f873e82a99e14c9caf053500f1087bbf119120e

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function App() {
  return (
<<<<<<< HEAD
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
        <Route path="/notification" element={<Notification />} />
        <Route path="/mentors" element={<MentorPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/company-home" element={<CompanyPage />} />
        <Route path="/company-logout" element={<CompanyLogout />} />
        <Route path="/mentor-home" element={<MentorHome />} />

        {/* The above Route with a path of * will match any path that is not matched by previous routes */}
      </Routes>
    </UserContextProvider>
=======
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
      <Route path="/mentor/:mentorId" element={<MentorProfile />} />
    </Routes>
>>>>>>> 3f873e82a99e14c9caf053500f1087bbf119120e
  );
}

export default App;
