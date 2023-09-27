import { useSelector } from "react-redux";
import store from "../../redux/store";
const { getState } = store;

interface HeaderPropsType {
  setDisplay: () => void;
}

const Header = ({ setDisplay }: HeaderPropsType) => {
  const numberOfUsers = useSelector(
    (state: ReturnType<typeof getState>) => state.online.users.length
  );

  return (
    <div className="Header">
      <button className="Burger" onClick={setDisplay}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="Info">
        <p className="Name">Online Chat</p>
        <p className="Status">Connected users - {numberOfUsers}</p>
      </div>
    </div>
  );
};

export default Header;
