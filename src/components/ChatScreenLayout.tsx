import "../styles/ChatScreenLayout.scss";

import "../styles/chatList/ChatList.scss";
import "../styles/chatList/AddNewChat.scss";
import "../styles/chatList/ChatListCard.scss";

import "../styles/mainChat/MainChat.scss";
import "../styles/mainChat/Header.scss";
import "../styles/mainChat/ChatBody.scss";
import "../styles/mainChat/ChatCard.scss";
import "../styles/mainChat/Input.scss";
import "../styles/mainChat/ChatBodyExtra.scss";

import "../styles/onlineChat/OnlineChat.scss";
import "../styles/onlineChat/Header.scss";
import "../styles/onlineChat/ChatBody.scss";
import "../styles/onlineChat/ChatCard.scss";
import "../styles/onlineChat/Input.scss";

import ChatList from "./chatList/ChatList";
import MainChat from "./mainChat/MainChat";
import OnlineChat from "./onlineChat/OnlineChat";

import { useSelector } from "react-redux";
import store from "../redux/store";
const { getState } = store;

const ChatScreenLayout = () => {
  const mode = useSelector((state: ReturnType<typeof getState>) => {
    return state?.util?.mode;
  });

  return (
    <div className="ChatScreenLayout">
      <ChatList />
      {mode == 0 ? <MainChat /> : <OnlineChat />}
    </div>
  );
};

export default ChatScreenLayout;
