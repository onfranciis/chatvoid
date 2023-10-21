import { useDispatch } from "react-redux";
import { SET_ONLINE } from "../../redux/util/utilSlice";

interface EmptyUserPropsType {
  setDisplay: () => void;
}

const EmptyUser = ({ setDisplay }: EmptyUserPropsType) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // setDisplay();
    dispatch(SET_ONLINE());
  };

  return (
    <div className="EmptyUser">
      <button className="Burger" onClick={setDisplay}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="Main">
        <div className="Blob">
          <img src="/Astronaut.svg" alt="" />
        </div>

        <ul>
          <li>
            To begin, click on <span onClick={setDisplay}>Add New User</span>
          </li>

          <li>Type the name of whoever you want to mimic conversations with</li>

          <li>Hit Enter</li>

          <li>
            To chat with other anonymous users, click{" "}
            <span onClick={handleClick} className="Online">
              Online users
            </span>
          </li>

          <p>
            <img src="/info.svg" alt="Info" /> You can now send and receive
            messages
          </p>
        </ul>
      </div>
    </div>
  );
};

export default EmptyUser;
