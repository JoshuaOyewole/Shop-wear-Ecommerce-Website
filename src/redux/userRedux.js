import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      gender:"",
      phone:12345,
      isAdmin: false,
    },
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    signupStart: (state) => {
      state.isFetching = true;
    },
    signupSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    signupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure } = userSlice.actions;
export default userSlice.reducer;
