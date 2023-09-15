import { useDispatch } from "react-redux";
import { ws } from "./Websocket";
import { UPDATE_USERS } from "../../redux/online/onlineSlice";

export default () => {
  const dispatch = useDispatch();
  ws.addEventListener("message", (message) => {
    try {
      const result = JSON.parse(message.data);

      if (result) {
        if (result.type == "no_of_users") {
          dispatch(UPDATE_USERS(result.value));
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
