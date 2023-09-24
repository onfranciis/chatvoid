type messageType = "users" | "message" | "notification" | "to_everyone";

export interface OnlineChatType {
  message: string;
  time: string;
  user: string;
  type: messageType;
  key: string;
}

export interface OnlineInitialState {
  messages: OnlineChatType[];
  users: string[];
}

export interface receiveMessageActionType {
  payload: {
    message: string;
    user: string;
    key: string;
    type: messageType;
  };
}
