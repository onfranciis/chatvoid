import { createSlice } from "@reduxjs/toolkit";
import { OnlineInitialState } from "./onlineTypes";
import moment from "moment";

const initialState: OnlineInitialState = {
  messages: [],
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
  },
});

export const { SEND_MESSAGE } = onlineSlice.actions;
export default onlineSlice.reducer;
