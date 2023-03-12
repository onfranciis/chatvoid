import AddNewChat from "./AddNewChat";
import ChatListCard from "./ChatListCard";

const ChatList = () => {
  return (
    <div className="ChatList">
      <AddNewChat />
      <ChatListCard />
    </div>
  );
};

export default ChatList;
