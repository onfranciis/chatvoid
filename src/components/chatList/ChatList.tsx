import { useSelector, useDispatch } from "react-redux";
import AddNewChat from "./AddNewChat";
import ChatListCard from "./ChatListCard";
import store from "../../redux/store";
import { nanoid } from "nanoid";
import OnlineCard from "./OnlineCard";
import { SET_SELECTED_MESSAGE } from "../../redux/util/utilSlice";
const { getState } = store;

interface ChatListPropType {
  setDisplay: (data: boolean) => void;
  display: boolean;
}

const ChatList = ({ setDisplay, display }: ChatListPropType) => {
  const dispatch = useDispatch();
  const Chats = useSelector(
    (state: ReturnType<typeof getState>) => state?.users.users
  );

  const emptyUser = () => {
    dispatch(
      SET_SELECTED_MESSAGE({ selectedMessagePayload: null, modePayload: null })
    );
    setDisplay(false);
  };

  return (
    <div className={`ChatList ${display && "toggled"}`}>
      <div className="Title" onClick={emptyUser}>
        C<span>hatvoid</span>
      </div>

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
