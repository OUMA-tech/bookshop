import { useDispatch } from 'react-redux';
import { LoginForm } from '../../components/user/LoginForm';
import { setUser } from '../../features/authentic/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useState } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSuccess = (res: LoginResponse) => {
    const userData = {
      id: res.user.id,
      username: res.user.username,
      token: res.token,
    };
    // 1. save to Redux
    dispatch(setUser(userData));

    // 2. save to localStorage
    localStorage.setItem('auth', JSON.stringify(userData));
  };

  
  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    setError('');
    try {
      const response:LoginResponse = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      }, {
        withCredentials: true 
      });
  
      
      handleLoginSuccess(response);
  
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return(
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <LoginForm onSubmit={handleSubmit} />;  
    </> 
  )
};