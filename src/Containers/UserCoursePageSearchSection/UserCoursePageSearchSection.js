import { useContext } from "react";
import Button from "../../Components/Button/Button";
import { AppContext } from "../../Context/AppContext";
import classes from "./UserCoursePageSearchSection.module.css";

const UserCoursePageSearchSection = ({ courseListRef }) => {
  // Context
  const { searchKeyWord, setSearchKeyWord } = useContext(AppContext);
  return (
    <section className={classes.container}>
      <div className={classes.inputSection}>
        <input
          type="text"
          placeholder="Search your favourite course"
          value={searchKeyWord}
          onChange={(e) => {
            setSearchKeyWord(e.target.value);
          }}
        />
        <div className={classes.buttonSection}>
          <Button
            type="primary"
            onClick={() => {
              if (searchKeyWord && courseListRef?.current) {
                courseListRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserCoursePageSearchSection;
