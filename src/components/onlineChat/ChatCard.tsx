import moment from "moment";
import { OnlineChatType } from "../../redux/online/onlineTypes";

type ChatCardPropType = {
  Data: OnlineChatType;
};

export const ChatCard1 = ({ Data }: ChatCardPropType) => {
  return (
    <div className={`OnlineChatCard OnlineChatCard1 `}>
      <p className="Name">{Data.user}</p>
      <p className="Text">{Data.message.trim()}</p>
      <p className="Time">{moment(JSON.parse(Data.time)).format("h:mma")}</p>
    </div>
  );
};

export const ChatCard2 = ({ Data }: ChatCardPropType) => {
  return (
    <div className={`OnlineChatCard OnlineChatCard2 `}>
      <p className="Text">{Data.message.trim()}</p>
      <p className="Time">{moment(JSON.parse(Data.time)).format("h:mma")}</p>
    </div>
  );
};

export const Notification = ({ Data }: ChatCardPropType) => {
  return (
    <div className={`OnlineNotification `}>
      <p className="Text">{Data.message.trim()}</p>
    </div>
  );
};
