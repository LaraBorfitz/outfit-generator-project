



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload);
            
            const { token, user } = action.payload;
  
            // Update Redux state
            state.token = token;
            state.user = user;
  
            // Persist token in localStorage
            localStorage.setItem("token", token);
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },
    },
  });

  export const { setCredentials, logout } = authSlice.actions;
  export default authSlice.reducer;


