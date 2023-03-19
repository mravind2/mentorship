import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import HeaderSection from '../landing/HeaderSection';
import axios from 'axios';
import { UserContext } from '../UserContext';



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('/login', { email, password });
      setUser(data);
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }
  

  if (redirect) {
    return <Navigate to="/home" />; // For version 6
    // return <Redirect to="/home" />; // For version 5
  }
  
  

  return (
    <div className="flex flex-col justify-center items-center mt-4 pt-48 max-w-md mx-auto">
      <HeaderSection/>
      <h1 className="text-4xl text-center mb-4">Login</h1>
  

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
          <Link className="underline text-black" to="/register">
            Register now
          </Link>
        </div>
      </form>
      
    </div>
  );
}

export default LoginPage;
