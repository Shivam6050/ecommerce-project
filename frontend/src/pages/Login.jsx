import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token, setToken,navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onForgotPasswordHandler = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
        if (response.data.success) {
            toast.success(response.data.message);
            navigate('/reset-password');
        } else {

            toast.error(response.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  }


  const handleGoogleSuccess = async (credentialResponse) => {
    try {
        const response = await axios.post(backendUrl + '/api/user/google-login', {
            idToken: credentialResponse.credential
        });
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error("Google Login Failed");
    }
  };


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        })
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password
        })
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message);
        } 
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(token){
      navigate('/');
    }
  }, [token])
  

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <form onSubmit={currentState === 'Forgot Password' ? onForgotPasswordHandler : onSubmitHandler} className='flex flex-col items-center w-full gap-4'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Sign Up' && <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' type='text' placeholder='Name' required/>}
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' type='email' placeholder='Email' required/>
        {currentState !== 'Forgot Password' && <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' type='password' placeholder='Password' required/>}
        
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p onClick={() => setCurrentState(currentState === 'Forgot Password' ? 'Login' : 'Forgot Password')} className='cursor-pointer'>
            {currentState === 'Forgot Password' ? 'Back to Login' : 'Forgot your password?'}
          </p>
          {
            currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer w-full'>
            {currentState === 'Login' ? 'Sign In' : currentState === 'Sign Up' ? 'Sign Up' : 'Send Reset Link'}
        </button>
      </form>

      {currentState !== 'Forgot Password' && (
        <div className='flex flex-col items-center gap-4 w-full mt-4'>
            <p className='text-gray-500'>OR</p>
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => toast.error("Google Login Failed")}
                useOneTap
            />
        </div>
      )}
    </div>
  )
}



export default Login
