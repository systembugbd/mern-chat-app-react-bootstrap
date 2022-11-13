import { createSlice } from "@reduxjs/toolkit";
import appApi from "./../services/appApi";

//creating user slice
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
  },
  extraReducers: (builder) => {
    //signup user
    builder.addMatcher(
      appApi.endpoints.signupUser.matchFulfilled,
      (state, { payload }) => payload
    );

    //login
    builder.addMatcher(
      appApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => payload
    );

    //logout
    builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null);
  },
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
