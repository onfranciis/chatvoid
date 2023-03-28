import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_NEW_USER } from "../../redux/users/usersSlice";
import { nanoid } from "nanoid";
import moment from "moment";

const AddNewChat = () => {
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

  return (
    <div className="AddNewChat">
      {editMode ? (
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.currentTarget.value);
          }}
          autoFocus
          onBlur={handleSubmit}
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
    </div>
  );
};

export default AddNewChat;
