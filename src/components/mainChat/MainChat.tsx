import { useSelector } from "react-redux";
import ChatBody from "./ChatBody";
import Header from "./Header";
import Input from "./Input";
import store from "../../redux/store";
import EmptyUser from "./EmptyUser";
const { getState } = store;

const MainChat = () => {
  const selectedMessage = useSelector(
    (state: ReturnType<typeof getState>) => state?.util.selectedMessage === null
  );

  return selectedMessage ? (
    <EmptyUser />
  ) : (
    <div className="MainChat">
      <Header />
      <ChatBody />
      <Input />
    </div>
  );
};

export default MainChat;
