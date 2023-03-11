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

import ChatList from "./chatList/ChatList";
import MainChat from "./mainChat/MainChat";

const ChatScreenLayout = () => {
  return (
    <div className="ChatScreenLayout">
      <ChatList />
      <MainChat />
    </div>
  );
};

export default ChatScreenLayout;
