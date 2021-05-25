import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    setAllMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllMessages } = messageSlice.actions;

export default messageSlice.reducer;
