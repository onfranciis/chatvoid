import { createSlice } from "@reduxjs/toolkit";
import { utilActionType, utilStateType } from "./utilTypes";

export const utilSlice = createSlice({
  name: "util",
  initialState: <utilStateType>{ selectedMessage: null },
  reducers: {
    SET_SELECTED_MESSAGE: (state, action: utilActionType) => {
      state.selectedMessage = action.payload;
    },
  },
});

export const { SET_SELECTED_MESSAGE } = utilSlice.actions;
export default utilSlice.reducer;
