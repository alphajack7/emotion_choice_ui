import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../config/firebase';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../../slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const [verified,setVerified]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(Auth, email, password);
      localStorage.setItem('token',userCredential.user.accessToken)
      // console.log("User logged in:", userCredential.user.accessToken);
      dispatch(login(localStorage.getItem('token')))
      setVerified(true)
      navigate('/admin')
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message)
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2.5 bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <p className="text-center text-3xl font-semibold mb-8 text-blue-600">Login</p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md outline-blue-500 w-full h-10 px-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        {verified && <p className='text-green-600 text-center'>authentication successful</p>}
        {error && <p className='text-red-600 text-center'>{error}</p>}
      </div>
      <a href="/" className="text-blue-500 hover:underline">Return to Homepage</a>
    </div>
  );
};

export default Login;
