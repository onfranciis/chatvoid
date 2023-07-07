export interface OnlineChatType {
  message: string;
  time: string;
  user: string;
}

export interface OnlineInitialState {
  messages: OnlineChatType[];
}
