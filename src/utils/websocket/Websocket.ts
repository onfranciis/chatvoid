import { ws } from "../../App";

const useWebsocketHandler = () => {
  const sendMessage = (message: string) => {
    ws.send(
      JSON.stringify({
        message,
        type: "message",
      })
    );
  };

  const status = () => {
    if (ws.readyState == 1) {
      return "OPEN";
    } else if (ws.readyState == 0) {
      return "CONNECTING";
    } else if (ws.readyState == 2) {
      return "CLOSING";
    } else {
      return "CLOSED";
    }
  };

  return { status, sendMessage };
};

export default useWebsocketHandler;
