import { useState } from "react";
import classes from "./UserCoursePageListSection.module.css";
import SectionsNav from "../../Components/SectionsNav/SectionsNav";
import CourseCard from "../../Components/CourseCard/CourseCard";

const UserCoursePageListSection = () => {
  // States
  const [navItems, setNavItems] = useState([
    { title: "All", isActive: true },
    { title: "Ongoing", isActive: false },
    { title: "Completed", isActive: false },
  ]);

  return (
    <section className={classes.container}>
      <div className={classes.navSection}>
        <SectionsNav
          navItems={navItems}
          setNavItems={setNavItems}
          style={{ flexBasis: "33.3%" }}
        />
      </div>
      <div className={classes.courseListSection}>
        <CourseCard />
      </div>
    </section>
  );
};

export default UserCoursePageListSection;
