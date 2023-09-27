import { useSelector } from "react-redux";
import store from "../../redux/store";
const { getState } = store;

interface HeaderPropsType {
  setDisplay: () => void;
}

const Header = ({ setDisplay }: HeaderPropsType) => {
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
      <button className="Burger" onClick={setDisplay}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="Info">
        <p className="Name">{selectedMessage?.username}</p>
        <p className="Status">{selectedMessage?.typing}</p>
      </div>
    </div>
  );
};

export default Header;
