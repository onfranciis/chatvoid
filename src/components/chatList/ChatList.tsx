import { useSelector } from "react-redux";
import AddNewChat from "./AddNewChat";
import ChatListCard from "./ChatListCard";
import store from "../../redux/store";
import { nanoid } from "nanoid";
const { getState } = store;

const ChatList = () => {
  const Chats = useSelector(
    (state: ReturnType<typeof getState>) => state?.users.users
  );

  return (
    <div className="ChatList">
      <AddNewChat />
      {Chats.map((chat) => (
        <ChatListCard
          key={nanoid()}
          Name={chat.username}
          Chat={chat}
          LastMessage={
            chat?.messages[chat.messages.length - 1]?.chats[
              chat.messages[chat.messages.length - 1].chats.length - 1
            ]?.message
          }
        />
      ))}
    </div>
  );
};

export default ChatList;
