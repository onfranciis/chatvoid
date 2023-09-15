import useHandleMessage from "./handleMessage";

export const ws = new WebSocket("ws://localhost:5050");

const useWebsocketHandler = () => {
  useHandleMessage();
  const { readyState } = ws;

  const sendMessage = () => {
    ws.send(
      JSON.stringify({
        name: "John",
        message: "Lorem Ipsum",
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
