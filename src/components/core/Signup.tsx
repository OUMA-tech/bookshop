import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import Layout from "./Layout"
import { useDispatch } from 'react-redux';
import { setUser } from "../../features/user/userSlice";

function Signup() {
    const dispatch = useDispatch();

    const handleRegisterSuccess = (userData: { name: string; email: string }) => {
        dispatch(setUser(userData));
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // 在这里处理登录逻辑
        console.log('Logging in...');
    }
  return (
    <Layout title="ALBOOK" subTitle="Sign Up Now">
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ mt: 10, px: 3, py: 4, borderRadius: 2 }}>
                <Typography variant="h6" align="center" gutterBottom>
                Sign Up
                </Typography>
                <Box
                component="form"
                onSubmit={handleRegister}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                <TextField size="small" label="name" type="name" required fullWidth />
                <TextField size="small" label="Email" type="email" required fullWidth />
                <TextField size="small" label="Password" type="password" required fullWidth />
                <Button variant="contained" size="small" type="submit">
                    Login
                </Button>
                </Box>
            </Paper>
        </Container>
    </Layout>
  )
}

export default Signup