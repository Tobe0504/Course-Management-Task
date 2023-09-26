import { createContext, useEffect, useState } from "react";
import { courses } from "../Utilities/courses";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // States
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [userCourses, setUserCourses] = useState(
    courses.map((data) => {
      return { ...data, isEnrolling: false };
    })
  );

  useEffect(() => {
    if (searchKeyWord) {
      const newCourses = courses.filter((data) => {
        return data.title
          .toLowerCase()
          .includes(searchKeyWord.toLowerCase().trim());
      });

      setUserCourses(newCourses);
    }
    if (!searchKeyWord) {
      setUserCourses(courses);
    }
  }, [searchKeyWord]);

  // Utils
  const isEnrollingActiveHandler = (title) => {
    const userCoursesCopy = userCourses.map((data) => {
      if (data.title === title) {
        return { ...data, isEnrolling: !data.isEnrolling };
      } else {
        return { ...data };
      }
    });
    setUserCourses(userCoursesCopy);
  };

  return (
    <AppContext.Provider
      value={{
        userCourses,
        isEnrollingActiveHandler,
        searchKeyWord,
        setSearchKeyWord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
