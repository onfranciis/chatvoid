export interface chatType {
  id: string;
  message: string;
  time: string;
  type: number;
}

export type userMessagesType = { day: string; chats: chatType[] }[];

export interface usersStateType {
  users: {
    id: string;
    username: string;
    joined: string;
    lastseen: string;
    read: boolean;
    typing: boolean;
    messages: userMessagesType;
  }[];
}

export interface usersActionType {
  payload: chatType;
  day?: string;
}
