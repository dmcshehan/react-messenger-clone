import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    usernames: [],
    hasUsername: false,
  },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
      state.usernames.forEach((user) => {
        if (user.uid === action.payload.uid) {
          state.hasSetUsername = true;
        }
      });
    },
    signout: (state) => {
      state.user = null;
      state.usernames = [];
      state.hasUsername = false;
    },
    setUsernames: (state, action) => {
      state.usernames = action.payload;
    },
    setHasUsername: (state) => {
      state.hasUsername = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signin, signout, setUsernames, setHasUsername } =
  userSlice.actions;

export default userSlice.reducer;
