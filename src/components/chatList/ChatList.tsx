import { useSelector } from "react-redux";
import AddNewChat from "./AddNewChat";
import ChatListCard from "./ChatListCard";
import store from "../../redux/store";
import { nanoid } from "nanoid";
import OnlineCard from "./OnlineCard";
const { getState } = store;

interface ChatListPropType {
  setDisplay: (data: boolean) => void;
  display: boolean;
}

const ChatList = ({ setDisplay, display }: ChatListPropType) => {
  const Chats = useSelector(
    (state: ReturnType<typeof getState>) => state?.users.users
  );

  return (
    <div className={`ChatList ${display && "toggled"}`}>
      <AddNewChat
        setDisplay={() => {
          setDisplay(false);
        }}
      />

      <OnlineCard
        setDisplay={() => {
          setDisplay(false);
        }}
      />

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
          setDisplay={() => {
            setDisplay(false);
          }}
        />
      ))}
    </div>
  );
};

export default ChatList;
