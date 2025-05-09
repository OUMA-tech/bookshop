import { setUser } from "../../features/authentic/authSlice";
import Layout from "./Layout"
import { useDispatch } from 'react-redux';
import { Container, Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLoginSuccess = (userData: LoginResponse) => {
      // 1. save to Redux
      dispatch(setUser({
        id: userData.user.id,
        username: userData.user.username,
        token: userData.token,
      }));

      // 2. save to localStorage
      localStorage.setItem('auth', JSON.stringify(userData));
    };


  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
  
      try {
        const response:LoginResponse = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        }, {
          withCredentials: true // 也必须加上
        });
  
        
        handleLoginSuccess(response);
  
        navigate('/dashboard');
      } catch (err: any) {
        setError(err.response?.data?.message || 'Login failed');
      }
    }


    return (
        <>
            <Layout title="ALBOOK" subTitle="Signin">Login</Layout>
            <Container maxWidth="xs">
            <Paper elevation={3} sx={{ mt: 10, px: 3, py: 4, borderRadius: 2 }}>
                <Typography variant="h6" align="center" gutterBottom>
                Sign In
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    size="small"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                />
                <TextField
                    size="small"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                />
                <Button variant="contained" size="small" type="submit">
                    Login
                </Button>
                </Box>
            </Paper>
            </Container>
      </>
    )
}

export default Login