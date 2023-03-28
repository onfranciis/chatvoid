type ChatListCardPropType = {
  Name: string;
  LastMessage: string;
};

const ChatListCard = ({ Name, LastMessage }: ChatListCardPropType) => {
  return (
    <div className="ChatListCard">
      <p className="Name">{Name}</p>
      <p className="Message">{LastMessage}</p>
    </div>
  );
};

export default ChatListCard;
