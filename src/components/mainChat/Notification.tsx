import moment from "moment";

type NotificationPropsType = {
  Message: string;
};

const Notification = ({ Message }: NotificationPropsType) => {
  const ParsedMessage = JSON.parse(Message);

  return (
    <div className="Notification">
      <p>{`${
        moment(ParsedMessage).format("YYYY-MM-DD") ==
        moment().format("YYYY-MM-DD")
          ? "Today"
          : moment(ParsedMessage).format("YYYY-MM-DD") ==
            moment().subtract(1, "day").format("YYYY-MM-DD")
          ? "Yesterday"
          : moment(ParsedMessage).format("Do MMMM, YYYY")
      }`}</p>
    </div>
  );
};

export default Notification;
