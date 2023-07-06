import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { NEW_CHAT, SAME_DAY } from "../../redux/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { nanoid } from "nanoid";
import store from "../../redux/store";
const { getState } = store;

const Input = () => {
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);

  const selectedMessageIndex = useSelector(
    (state: ReturnType<typeof getState>) => state?.util?.selectedMessage
  );

  const getCurrentChatDay = useSelector(
    (state: ReturnType<typeof getState>) =>
      state?.users.users[selectedMessageIndex ?? 0]?.messages.slice(-1)[0]?.day
  );

  const parsedCurrentChatDay =
    getCurrentChatDay !== undefined ? JSON.parse(getCurrentChatDay) : "";

  const dispatchBody = (type: number) => ({
    id: nanoid(),
    message,
    time: JSON.stringify(moment()),
    type: type,
  });

  /**
   * Handle Send
   * @param {number} type
   * @returns {void}
   * Call different dispatch actions depending on the day the handleSend function was called.
   * If the funtion was called on the same day the last message was sent,
   * it would call SAME_DAY action and if it wasn't,
   * it would NEW_CHAT action.
   */

  const handleSend = (type: number): void => {
    if (message.trim() == "") return;

    if (selectedMessageIndex !== null) {
      if (
        moment(parsedCurrentChatDay).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD")
      ) {
        dispatch(
          SAME_DAY({
            mainData: dispatchBody(type),
            selectedMessageIndex: selectedMessageIndex,
          })
        );
      } else {
        dispatch(
          NEW_CHAT({
            mainData: dispatchBody(type),
            selectedMessageIndex: selectedMessageIndex,
          })
        );
      }
    } else {
    }

    setMessage("");
  };

  const handleSend2 = () => {
    handleSend(1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      if (e.key == "Enter" && e.shiftKey) {
      } else {
        e.preventDefault();
        handleSend(2);
      }
    }
  };

  useEffect(() => {
    TextAreaRef.current?.focus();
  }, [selectedMessageIndex]);

  return (
    <div className="Input">
      <button onClick={handleSend2}>Receive</button>

      <textarea
        name="message"
        id="message"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        ref={TextAreaRef}
      ></textarea>

      <button onClick={() => handleSend(2)}>Send</button>
    </div>
  );
};

export default Input;
