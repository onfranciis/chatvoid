import { useSelector } from "react-redux";
import ChatBody from "./ChatBody";
import Header from "./Header";
import Input from "./Input";
import store from "../../redux/store";
import EmptyUser from "./EmptyUser";
import useWebsocketHandler from "../../utils/websocket/Websocket";
const { getState } = store;

interface MainChatPropsType {
  setDisplay: () => void;
}

const MainChat = ({ setDisplay }: MainChatPropsType) => {
  useWebsocketHandler();
  const selectedMessage = useSelector(
    (state: ReturnType<typeof getState>) => state?.util.selectedMessage === null
  );

  return selectedMessage ? (
    <EmptyUser setDisplay={setDisplay} />
  ) : (
    <div className="MainChat">
      <Header setDisplay={setDisplay} />
      <ChatBody />
      <Input />
    </div>
  );
};

export default MainChat;
