// Mode has three values, 0 ,1 and null
// 0 switches to offline
// 1 switches to online
// null clears the chat display

export interface utilStateType {
  selectedMessage: number | null;
  mode: 0 | 1 | null;
}

export interface utilActionType {
  payload: {
    selectedMessagePayload: number | null;
    modePayload: null | 0 | 1;
  };
}
