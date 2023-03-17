import { createSlice } from "@reduxjs/toolkit";
import { usersStateType, usersActionType } from "./usersTypes";
import moment from "moment";

export const usersSlice = createSlice({
  name: "users",
  initialState: <usersStateType>{
    users: [],
  },
  reducers: {
    SAME_DAY: (state, action: usersActionType) => {
      state.users[0].messages[0].chats.push(action.payload);
    },

    NEW_CHAT: (state, action: usersActionType) => {
      state.users[state.users.length - 1].messages = [
        {
          day: action.day!,
          chats: [{ ...action.payload }],
        },
      ];
    },

    ADD_NEW_USER: (state, action: usersActionType) => {
      state.users.push({
        id: "",
        joined: JSON.stringify(moment()),
        lastseen: JSON.stringify(moment()),
        read: false,
        typing: false,
        username: "",
        messages: [{ day: "", chats: [{ ...action.payload }] }],
      });
    },
  },
});

export const { SAME_DAY, NEW_CHAT, ADD_NEW_USER } = usersSlice.actions;
export default usersSlice.reducer;
