import { useSelector, useDispatch } from "react-redux";
import { usersType } from "../../redux/users/usersTypes";
import { SET_SELECTED_MESSAGE } from "../../redux/util/utilSlice";
import store from "../../redux/store";
const { getState } = store;

type ChatListCardPropType = {
  Name: string;
  LastMessage: string;
  Chat: usersType;
  setDisplay: () => void;
};

const ChatListCard = ({
  Name,
  LastMessage,
  Chat,
  setDisplay,
}: ChatListCardPropType) => {
  const dispatch = useDispatch();
  const selectedMessageIndex = useSelector(
    (state: ReturnType<typeof getState>) => {
      return state?.users?.users?.indexOf(Chat);
    }
  );

  const handleClick = () => {
    dispatch(
      SET_SELECTED_MESSAGE({
        selectedMessagePayload: selectedMessageIndex,
        modePayload: 0,
      })
    );
    setDisplay();
  };

  return (
    <div className="ChatListCard" onClick={handleClick}>
      <p className="Name">{Name}</p>
      <p className="Message">{LastMessage}</p>
    </div>
  );
};

export default ChatListCard;
