import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 pt-24 max-w-md mx-auto">
      <h1 className="text-4xl text-center mb-4 text-indigo-700">Login</h1>
      <form className="max-w-mf mx-auto" onSubmit={handleLoginSubmit}>
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
        <button className="bg-indigo-600 hover:bg-indigo-700 p-2 w-full text-white rounded-2xl">
          Login
        </button>
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet?{' '}
          <Link className="underline text-indigo-700" to="/register">
            Register now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
