import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { OnlineInitialState, receiveMessageActionType } from "./onlineTypes";
import moment from "moment";

const initialState: OnlineInitialState = {
  messages: [],
  users: [],
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
        key: uuid(),
        type: "message",
      });
    },
    RECEIVE_MESSAGE: (state, action: receiveMessageActionType) => {
      state.messages.push({
        message: action.payload.message,
        time: JSON.stringify(moment()),
        user: action.payload.user,
        key: uuid(),
        type: action.payload.type,
      });
    },
    UPDATE_USERS: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { SEND_MESSAGE, UPDATE_USERS, RECEIVE_MESSAGE } =
  onlineSlice.actions;
export default onlineSlice.reducer;
