interface EmptyUserPropsType {
  setDisplay: () => void;
}

const EmptyUser = ({ setDisplay }: EmptyUserPropsType) => {
  return (
    <div className="EmptyUser">
      <button className="Burger" onClick={setDisplay}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="Blob">
        <img src="/Astronaut.svg" alt="" />
      </div>

      <ul>
        <li>
          To begin, click on <span onClick={setDisplay}>Add New User</span>
        </li>

        <li>Type the name of whoever you want to mimic conversations with</li>

        <li>Hit Enter</li>

        <li>
          To chat with other anonymous users, click{" "}
          <span onClick={setDisplay} className="Online">
            Online users
          </span>
        </li>

        <p>You can now send and receive messages</p>
      </ul>
    </div>
  );
};

export default EmptyUser;
