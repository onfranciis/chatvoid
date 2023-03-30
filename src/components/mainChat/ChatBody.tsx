import { useId } from "react";
import { ChatCard1, ChatCard2 } from "./ChatCard";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import store from "../../redux/store";
const { getState } = store;

const ChatBody = () => {
  const Key = useId();
  const selectedMessage = useSelector(
    (state: ReturnType<typeof getState>) => state?.util?.selectedMessage
  );
  const chatData = useSelector((state: ReturnType<typeof getState>) =>
    selectedMessage ? state?.users?.users[selectedMessage] : null
  );

  return (
    <div className="ChatBody">
      {chatData?.messages?.map((message) => (
        <div className="Chat">
          <Notification key={message.day} />
          {message?.chats?.map((chat) => (
            <ChatCard1
              key={`${Key}-$${nanoid()}`}
              body={chat.message}
              time={chat.time}
            />
          ))}
        </div>
      ))}

      <div className="EmptyBottom"></div>
    </div>
  );
};

export default ChatBody;
