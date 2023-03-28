import { useState } from "react";
import { ADD_NEW_USER, NEW_CHAT, SAME_DAY } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";
import moment from "moment";
import { nanoid } from "nanoid";

const Input = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const dispatchBody = {
    id: nanoid(),
    message,
    time: JSON.stringify(moment()),
    type: 1,
  };

  const handleSend = () => {
    dispatch(SAME_DAY(dispatchBody));
  };

  const handleSend2 = () => {
    dispatch(NEW_CHAT(dispatchBody));
  };

  return (
    <div className="Input">
      <button onClick={handleSend2}>Receive</button>

      <textarea
        name="message"
        id="message"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>

      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Input;
