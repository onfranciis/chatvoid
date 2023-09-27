import { useSelector } from "react-redux";
import ChatBody from "./ChatBody";
import Header from "./Header";
import Input from "./Input";
import store from "../../redux/store";
const { getState } = store;

interface OnlineChatPropsType {
  setDisplay: () => void;
}

const OnlineChat = ({ setDisplay }: OnlineChatPropsType) => {
  const selectedMessage = useSelector(
    (state: ReturnType<typeof getState>) => state?.util.selectedMessage === null
  );

  return (
    <div className="OnlineChat">
      <Header setDisplay={setDisplay} />
      <ChatBody />
      <Input />
    </div>
  );
};

export default OnlineChat;
