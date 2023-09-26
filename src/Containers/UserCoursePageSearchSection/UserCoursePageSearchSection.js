import Button from "../../Components/Button/Button";
import classes from "./UserCoursePageSearchSection.module.css";

const UserCoursePageSearchSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.inputSection}>
        <input type="text" placeholder="Search your favourite course" />
        <div className={classes.buttonSection}>
          <Button type="primary">Search</Button>
        </div>
      </div>
    </section>
  );
};

export default UserCoursePageSearchSection;
