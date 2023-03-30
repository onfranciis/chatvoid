import { useSelector, useDispatch } from "react-redux";
import { usersType } from "../../redux/users/usersTypes";
import { SET_SELECTED_MESSAGE } from "../../redux/util/utilSlice";
import store from "../../redux/store";
const { getState } = store;

type ChatListCardPropType = {
  Name: string;
  LastMessage: string;
  Chat: usersType;
};

const ChatListCard = ({ Name, LastMessage, Chat }: ChatListCardPropType) => {
  const dispatch = useDispatch();
  const selectedMessageIndex = useSelector(
    (state: ReturnType<typeof getState>) => {
      return state?.users?.users?.indexOf(Chat);
    }
  );

  const handleClick = () => {
    dispatch(SET_SELECTED_MESSAGE(selectedMessageIndex));
  };

  return (
    <div className="ChatListCard" onClick={handleClick}>
      <p className="Name">{Name}</p>
      <p className="Message">{LastMessage}</p>
    </div>
  );
};

export default ChatListCard;
