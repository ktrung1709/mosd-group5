import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  loginCode: 0,
  registerCode: 0,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetCodes: (state) => {
      state.loginCode = 0;
      state.registerCode = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        state.registerCode = 1;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action?.error;
        if (action?.payload?.response?.data?.message?.length === 2)
          state.registerCode = 2;
        if (
          action?.payload?.response?.data?.message[0] ===
          "Invalid email address" &&
          action?.payload?.response?.data?.message?.length === 1
        )
          state.registerCode = 3;
        if (
          action?.payload?.response?.data?.message[0] ===
          "Username already exists" &&
          action?.payload?.response?.data?.message?.length === 1
        )
          state.registerCode = 4;
        if (
          action?.payload?.response?.data?.message[0] ===
          "Email already exists" &&
          action?.payload?.response?.data?.message?.length === 1
        )
          state.registerCode = 5;
        if (
          action?.payload?.response?.data?.message[0] ===
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character" &&
          action?.payload?.response?.data?.message?.length === 1
        )
          state.registerCode = 6;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("username", action.payload.username);
          localStorage.setItem("userId", action.payload.userId);
          state.loginCode = 1;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action?.error;

        if (
          action?.payload?.response?.data?.message ===
          "Invalid email or password"
        )
          state.loginCode = 2;
        else if (action?.payload?.response?.data?.message ===
          "Account is not activated")
          state.loginCode = 3;
      });
  },
});

export const { resetCodes } = authSlice.actions;

export default authSlice.reducer;
