import { useDispatch } from "react-redux";
import { ws } from "../../App";
import { RECEIVE_MESSAGE, UPDATE_USERS } from "../../redux/online/onlineSlice";
import { OnlineChatType } from "../../redux/online/onlineTypes";

export default () => {
  const dispatch = useDispatch();

  ws.addEventListener("message", (message) => {
    try {
      const result = JSON.parse(message.data) as OnlineChatType;

      if (result) {
        if (result.type == "users") {
          dispatch(UPDATE_USERS(result.message));
        } else if (result.type == "message" || result.type == "notification") {
          const { user, message, key, type } = result;
          dispatch(RECEIVE_MESSAGE({ user, message, key, type }));
        } else if (result.type == "to_everyone") {
          const { user, message, key, type } = result;
          dispatch(RECEIVE_MESSAGE({ user, message, key, type }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};
