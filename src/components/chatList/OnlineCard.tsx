import store from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { SET_ONLINE } from "../../redux/util/utilSlice";
const { getState } = store;

const OnlineCard = () => {
  const numberOfUsers = useSelector(
    (state: ReturnType<typeof getState>) => state?.online.numberOfUsers
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SET_ONLINE());
  };

  return (
    <div className="OnlineCard" onClick={handleClick}>
      <p>
        Online users : <span>{numberOfUsers}</span>
      </p>
    </div>
  );
};

export default OnlineCard;
