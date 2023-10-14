import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../network/auth";
import { AuthState, User } from "../models";

const initialState: AuthState = {
  user: {} as User,
  loggedIn: false,
  loading: false,
};

export const getStatus = createAsyncThunk("auth/getStatus", async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      return { user: JSON.parse(user), loggedIn: true };
    } else {
      return { user: {}, loggedIn: false };
    }
  } catch (error) {
    return { token: {}, loggedIn: false };
  }
});

export const loginState = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.login(email, password);
      if (response) {
        const user = {
          _id: response._id,
          access_token: response.access_token,
          email: response.email,
          name: response.name,
          status: response.status,
        };
        await AsyncStorage.setItem("user", JSON.stringify(user));
        return { user: user, loggedIn: true };
      }
      return { user: {} as User, loggedIn: false };
    } catch (error) {
      return { user: {} as User, token: null, loggedIn: false };
    }
  }
);

export const logoutState = createAsyncThunk("auth/logout", async () => {
  try {
    await AsyncStorage.removeItem("user");
    return { user: {} as User, loggedIn: false };
  } catch (error) {
    return { user: {} as User, loggedIn: false };
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStatus.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.loggedIn = payload.loggedIn;
      })
      .addCase(getStatus.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(loginState.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginState.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.loggedIn = payload.loggedIn;
      })
      .addCase(loginState.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(logoutState.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutState.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.loggedIn = payload.loggedIn;
      })
      .addCase(logoutState.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
