import React, { useContext, useState } from "react";
import classes from "./UserCoursePageListSection.module.css";
import SectionsNav from "../../Components/SectionsNav/SectionsNav";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { AppContext } from "../../Context/AppContext";

const UserCoursePageListSection = () => {
  // Context
  const { userCourses } = useContext(AppContext);
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
      {navItems[0].isActive && (
        <div className={classes.courseListSection}>
          {userCourses.length > 0 ? (
            userCourses?.map((data, i) => {
              return (
                <React.Fragment key={i}>
                  <CourseCard data={data} index={i} />
                </React.Fragment>
              );
            })
          ) : (
            <div>No courses available</div>
          )}
        </div>
      )}

      {navItems[1].isActive && (
        <div className={classes.courseListSection}>
          {userCourses.filter((data) => {
            return data.isEnrolling;
          }).length > 0 ? (
            userCourses
              ?.filter((data) => {
                return data.isEnrolling;
              })
              ?.map((data, i) => {
                return (
                  <React.Fragment key={i}>
                    <CourseCard data={data} index={i} />
                  </React.Fragment>
                );
              })
          ) : (
            <div>No courses available</div>
          )}
        </div>
      )}

      {navItems[2].isActive && (
        <div className={classes.courseListSection}>
          {userCourses.filter((data) => {
            return data.isCompleted;
          }).length > 0 ? (
            userCourses
              ?.filter((data) => {
                return data.isCompleted;
              })
              ?.map((data, i) => {
                return (
                  <React.Fragment key={i}>
                    <CourseCard data={data} index={i} />
                  </React.Fragment>
                );
              })
          ) : (
            <div>No courses available</div>
          )}
        </div>
      )}
    </section>
  );
};

export default UserCoursePageListSection;
