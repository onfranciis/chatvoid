import moment from "moment";

type ChatCardPropType = {
  body: string;
  time: string;
};

export const ChatCard1 = ({ body, time }: ChatCardPropType) => {
  return (
    <div className={`ChatCard ChatCard1 `}>
      <p className="Text">{body.trim()}</p>
      <p className="Time">{moment(JSON.parse(time)).format("h:mma")}</p>
    </div>
  );
};

export const ChatCard2 = ({ body, time }: ChatCardPropType) => {
  return (
    <div className={`ChatCard ChatCard2 `}>
      <p className="Text">{body.trim()}</p>
      <p className="Time">{moment(JSON.parse(time)).format("h:mma")}</p>
    </div>
  );
};
