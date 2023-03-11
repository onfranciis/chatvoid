import { ChatCard1, ChatCard2 } from "./ChatCard";
import Notification from "./Notification";

const ChatBody = () => {
  return (
    <div className="ChatBody">
      <Notification />
      <ChatCard1 />
      <ChatCard2 />
      <div className="EmptyBottom"></div>
    </div>
  );
};

export default ChatBody;
