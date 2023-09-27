import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_NEW_USER } from "../../redux/users/usersSlice";
import { nanoid } from "nanoid";
import moment from "moment";

interface AddNewChatPropsType {
  setDisplay: () => void;
}

const AddNewChat = ({ setDisplay }: AddNewChatPropsType) => {
  const [userName, setUserName] = useState<string>("New User");
  const [editMode, setEditMode] = useState<boolean>(false);
  const dispatch = useDispatch();

  const dispatchBody = {
    id: nanoid(),
    message: userName,
    time: JSON.stringify(moment()),
    type: 1,
  };

  const handleSubmit = () => {
    setEditMode(false);
    dispatch(ADD_NEW_USER(dispatchBody));
    setUserName("New User");
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.target.select();
  };

  return (
    <div className="AddNewChat">
      {editMode ? (
        <input
          type="text"
          value={userName}
          onChange={handleOnChange}
          autoFocus
          onBlur={() => setEditMode(false)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
      ) : (
        <p
          onClick={() => {
            setEditMode(true);
          }}
        >
          Add New User
        </p>
      )}

      <button className="Burger" onClick={setDisplay}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default AddNewChat;
