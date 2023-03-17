import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../landing/HeaderSection';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 pt-24 max-w-md mx-auto">
      <HeaderSection />
      <h1 className="text-4xl text-center mb-4 text-indigo-700">Register</h1>
      <form className="max-w-mf mx-auto" onSubmit={handleRegistrationSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="w-full border my-1 py-2 px-3 rounded-2xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="w-full border my-1 py-2 px-3 rounded-2xl"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          className="w-full border my-1 py-2 px-3 rounded-2xl"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl">
          Register
        </button>
        <div className="text-center py-2 text-gray-500">
          Already have an account?{' '}
          <Link className="underline text-indigo-700" to="/login">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
