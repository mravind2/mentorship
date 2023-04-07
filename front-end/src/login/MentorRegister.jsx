import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../landing/HeaderSection';
import axios from 'axios';
import ToggleRegister from './ToggleRegister';

export default function MentorRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerMentor(ev) {
    ev.preventDefault();
    try {
      await axios.post('/mentor-register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Email is already in use');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-4 pt-48 max-w-md mx-auto">
      <HeaderSection />
      <ToggleRegister/>
      <h1 className="text-4xl text-center mb-4 mt-8">Mentor Registeration</h1>
      <form className="max-w-md mx-auto" onSubmit={registerMentor}>
        <input
          type="name"
          placeholder="Name"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        
        <button className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl">
          Register
        </button>
        <div className="text-center py-2 text-gray-600">
          Already a member?{' '}
          <Link className="underline text-black" to={'/login'}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

