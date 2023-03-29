export interface chatType {
  id: string;
  message: string;
  time: string;
  type: number;
}

export type userMessagesType = { day: string; chats: chatType[] }[];

export type usersType = {
  id: string;
  username: string;
  joined: string;
  lastseen: string;
  read: boolean;
  typing: boolean;
  messages: userMessagesType;
};

export interface usersStateType {
  users: usersType[];
}

export interface usersActionType {
  payload: chatType;
  day?: string;
}
