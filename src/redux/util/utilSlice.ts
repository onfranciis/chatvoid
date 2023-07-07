import { createSlice } from "@reduxjs/toolkit";
import { utilActionType, utilStateType } from "./utilTypes";

export const utilSlice = createSlice({
  name: "util",
  initialState: <utilStateType>{ selectedMessage: null, mode: 0 },
  reducers: {
    SET_SELECTED_MESSAGE: (state, action: utilActionType) => {
      state.selectedMessage = action.payload.selectedMessagePayload;
      state.mode = 0;
    },

    SET_ONLINE: (state) => {
      state.mode = 1;
      state.selectedMessage = null;
    },
  },
});

export const { SET_SELECTED_MESSAGE, SET_ONLINE } = utilSlice.actions;
export default utilSlice.reducer;
