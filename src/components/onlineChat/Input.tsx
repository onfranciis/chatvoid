import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SEND_MESSAGE } from "../../redux/online/onlineSlice";
import useWebsocketHandler from "../../utils/websocket/Websocket";

const Input = () => {
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);
  const { sendMessage } = useWebsocketHandler();

  const handleSend = (): void => {
    if (message.trim() !== "") {
      dispatch(SEND_MESSAGE(message));
      sendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      if (e.key == "Enter" && e.shiftKey) {
      } else {
        e.preventDefault();
        handleSend();
      }
    }
  };

  useEffect(() => {
    TextAreaRef.current?.focus();
  }, []);

  return (
    <div className="Input">
      <textarea
        name="message"
        id="message"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        ref={TextAreaRef}
      ></textarea>

      <button onClick={() => handleSend()}>Send</button>
    </div>
  );
};

export default Input;
