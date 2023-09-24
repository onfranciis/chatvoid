import { useEffect, useId, useRef } from "react";
import { ChatCard1, ChatCard2, Notification } from "./ChatCard";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import store from "../../redux/store";
import { filterDuplicateChats } from "../../utils/filterDuplicate";
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
      {filterDuplicateChats(chatData).map((chat) => (
        <div className="Chat" key={chat.key}>
          {chat.user == "me" ? (
            <ChatCard2 Data={chat} />
          ) : chat.type == "notification" ? (
            <Notification Data={chat} />
          ) : (
            <ChatCard1 Data={chat} />
          )}
        </div>
      ))}

      <div className="EmptyBottom" ref={EmptyBottomRef}></div>
    </div>
  );
};

export default ChatBody;
