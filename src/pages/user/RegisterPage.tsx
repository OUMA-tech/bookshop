import { useState } from 'react';
import axios from 'axios';
import { RegisterForm } from '../../components/user/RegisterForm';

export const RegisterPage = () => {
    const [error, setError] = useState('');
    
    const handleRegister = async ({ email, password, username }: { email: string; password: string; username: string }) => {
        try {
            const response = await axios.post(
              'http://localhost:5000/api/auth/register',
              {
                email,
                password,
                username,
              },
              {
                withCredentials: true, 
              }
            );
        
            return { success: true, message: response.data.message || 'register success!' };
          } catch (error: any) {
            const message =
              error.response?.data?.message || 'register failed';
            return { success: false, message };
          }

    }
  return (
    <>
      <RegisterForm onSubmit={handleRegister}/>
    </>
  )
}