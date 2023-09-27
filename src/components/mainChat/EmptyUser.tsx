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
      <p>
        Click on <span>Add New User</span> to begin
      </p>
    </div>
  );
};

export default EmptyUser;
