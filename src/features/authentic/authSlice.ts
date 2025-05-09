// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: string | null;
    username: string | null;
    token: string | null;
  };
  isAuthenticated: boolean;  
}

const initialState: AuthState = {
  user: {
    id: null,
    username: null,
    token: null,
  },
  isAuthenticated: false,  // default unlogin
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; username: string; token: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true; 
    },
    clearUser: (state) => {
      state.user = { id: null, username: null, token: null };
      state.isAuthenticated = false;  
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
