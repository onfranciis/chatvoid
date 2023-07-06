import { useDispatch } from "react-redux";
import { SET_ONLINE } from "../../redux/util/utilSlice";

const OnlineCard = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(SET_ONLINE());
  };

  return (
    <div className="OnlineCard" onClick={handleClick}>
      <p>
        Online users : <span>0</span>
      </p>
    </div>
  );
};

export default OnlineCard;
