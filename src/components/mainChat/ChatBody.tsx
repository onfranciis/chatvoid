import { useId } from "react";
import { ChatCard1, ChatCard2 } from "./ChatCard";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { usersStateType } from "../../redux/users/usersTypes";
import store from "../../redux/store";
const { getState } = store;

const ChatBody = () => {
  const Key = useId();
  const chatData = useSelector(
    (state: ReturnType<typeof getState>) => state?.users.users[0]
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
