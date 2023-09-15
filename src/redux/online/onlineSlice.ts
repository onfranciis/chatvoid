import { createSlice } from "@reduxjs/toolkit";
import { OnlineInitialState } from "./onlineTypes";
import moment from "moment";

const initialState: OnlineInitialState = {
  messages: [],
  numberOfUsers: 0,
};

export const onlineSlice = createSlice({
  name: "online",
  initialState,
  reducers: {
    SEND_MESSAGE: (state, action) => {
      state.messages.push({
        message: action.payload,
        time: JSON.stringify(moment()),
        user: "me",
      });
    },
    UPDATE_USERS: (state, action) => {
      state.numberOfUsers = action.payload;
    },
  },
});

export const { SEND_MESSAGE, UPDATE_USERS } = onlineSlice.actions;
export default onlineSlice.reducer;
