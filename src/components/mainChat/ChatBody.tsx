import { useEffect, useId, useRef } from "react";
import { ChatCard1, ChatCard2 } from "./ChatCard";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import store from "../../redux/store";
import EmptyChat from "./EmptyChat";
const { getState } = store;

const ChatBody = () => {
  const Key = useId();
  const EmptyBottomRef = useRef<HTMLDivElement>(null);
  const selectedMessage = useSelector(
    (state: ReturnType<typeof getState>) => state?.util?.selectedMessage
  );
  const chatData = useSelector((state: ReturnType<typeof getState>) =>
    selectedMessage !== null ? state?.users?.users[selectedMessage] : null
  );

  useEffect(() => {
    EmptyBottomRef.current?.scrollIntoView();
  }, [chatData]);

  return (
    <div className="ChatBody">
      {chatData?.messages?.map((message) => (
        <div className="Chat" key={message.day}>
          <Notification Message={message.day} />
          {message?.chats?.map((chat) =>
            chat?.type == 1 ? (
              <ChatCard1
                key={`${Key}-$${nanoid()}`}
                body={chat.message}
                time={chat.time}
              />
            ) : (
              <ChatCard2
                key={`${Key}-$${nanoid()}`}
                body={chat.message}
                time={chat.time}
              />
            )
          )}
        </div>
      ))}

      {chatData?.messages.length == 0 && <EmptyChat />}
      <div className="EmptyBottom" ref={EmptyBottomRef}></div>
    </div>
  );
};

export default ChatBody;
