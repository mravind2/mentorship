import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../landing/HeaderSection';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleToggle() {
    const toggle = document.getElementById('toggle');
    const dot = document.querySelector('.dot');
    if (toggle.checked) {
      dot.style.transform = 'translateX(100%)';
    } else {
      dot.style.transform = 'translateX(0%)';
    }
  }

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
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
      <h1 className="text-4xl text-center mb-4">Register for app</h1>
      <form className="max-w-md mx-auto" onSubmit={registerUser}>
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
        <div class="flex items-center justify-center py-4">
          <span class="text-gray-700 font-medium">Mentee</span>
          <label for="toggle" class="flex items-center ml-2 cursor-pointer">
            <div class="relative">
              <input
                id="toggle"
                type="checkbox"
                class="sr-only"
                onChange={handleToggle}
              />
              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
          <span class="ml-2 text-gray-700 font-medium">Mentor</span>
        </div>
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

export default RegisterPage;
