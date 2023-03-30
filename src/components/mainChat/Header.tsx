import { useSelector } from "react-redux";
import store from "../../redux/store";
const { getState } = store;

const Header = () => {
  const selectedMessageIndex = useSelector(
    (state: ReturnType<typeof getState>) => state.util.selectedMessage
  );

  const selectedMessage = useSelector((state: ReturnType<typeof getState>) =>
    selectedMessageIndex !== null
      ? state?.users.users[selectedMessageIndex]
      : null
  );

  return (
    <div className="Header">
      <p className="Name">{selectedMessage?.username}</p>
      <p className="Status">{selectedMessage?.typing}</p>
    </div>
  );
};

export default Header;
