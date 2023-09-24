export const ws = new WebSocket(
  import.meta.env.VITE_WEBSOCKET_PORT || "ws://localhost:5050"
);
import ChatScreenLayout from "./components/ChatScreenLayout";
import HandleMessage from "./utils/websocket/handleMessage";

function App() {
  HandleMessage();

  return (
    <div className="App">
      <ChatScreenLayout />
    </div>
  );
}

export default App;
