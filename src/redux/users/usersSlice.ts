import { createSlice } from "@reduxjs/toolkit";
import { usersStateType, usersActionType, addNewUserType } from "./usersTypes";
import moment from "moment";

export const usersSlice = createSlice({
  name: "users",
  initialState: <usersStateType>{
    users: [],
  },
  reducers: {
    SAME_DAY: (state, action: usersActionType) => {
      state.users[action.payload.selectedMessageIndex].messages
        .slice(-1)[0]
        .chats.push(action.payload.mainData);
    },

    NEW_CHAT: (state, action: usersActionType) => {
      state.users[action.payload.selectedMessageIndex].messages.push({
        day: JSON.stringify(moment()),
        chats: [{ ...action.payload.mainData }],
      });
    },

    ADD_NEW_USER: (state, action: addNewUserType) => {
      state.users.push({
        id: action.payload.id,
        joined: JSON.stringify(moment()),
        lastseen: JSON.stringify(moment()),
        read: false,
        typing: false,
        username: action.payload.message,
        messages: [],
      });
    },
  },
});

export const { SAME_DAY, NEW_CHAT, ADD_NEW_USER } = usersSlice.actions;
export default usersSlice.reducer;
