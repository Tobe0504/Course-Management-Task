import { useContext } from "react";
import Button from "../../Components/Button/Button";
import { AppContext } from "../../Context/AppContext";
import classes from "./UserNameModalBody.module.css";

const UserNameModalBody = ({ onClick }) => {
  // Context
  const { userName, setUserName, saveUser } = useContext(AppContext);
  return (
    <div className={classes.container}>
      <h4> Hey there 😍 </h4>
      <p> Welcome! </p>
      <p>
        For customization purposes, please tell us your name so we can make this
        platform look like it's just for you!
      </p>
      <p>
        It's not important for you to, it's just so you aren't just called
        "User" by us! <br />
        Click anywhere to clear this modal
      </p>
      <input
        type="text"
        placeholder="Eg. Tobe's next recruiter"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <div className={classes.buttonSection}>
        <Button
          type="primary"
          onClick={() => {
            saveUser();

            onClick();
          }}
        >
          Save!
        </Button>
      </div>
    </div>
  );
};

export default UserNameModalBody;
