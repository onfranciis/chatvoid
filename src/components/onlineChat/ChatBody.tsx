import { useEffect, useId, useRef } from "react";
import { ChatCard1, ChatCard2 } from "./ChatCard";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import store from "../../redux/store";
const { getState } = store;

const ChatBody = () => {
  const Key = useId();
  const EmptyBottomRef = useRef<HTMLDivElement>(null);

  const chatData = useSelector(
    (state: ReturnType<typeof getState>) => state.online.messages
  );

  useEffect(() => {
    EmptyBottomRef.current?.scrollIntoView();
  }, [chatData]);

  return (
    <div className="ChatBody">
      {chatData.map((chat) => (
        <div className="Chat" key={chat.time}>
          {chat.user !== "me" ? (
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
          )}
        </div>
      ))}

      <div className="EmptyBottom" ref={EmptyBottomRef}></div>
    </div>
  );
};

export default ChatBody;
