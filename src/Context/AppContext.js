import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { courses } from "../Utilities/courses";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Local storage variables
  const localUsername = localStorage.getItem("course-task-user");

  // States
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [userCourses, setUserCourses] = useState(
    courses.map((data) => {
      return { ...data, isEnrolling: false };
    })
  );
  const [userLocationState, setUserLocationState] = useState({
    longitude: null,
    latitude: null,
  });
  const [weatherResponse, setWeatherResponse] = useState({
    isLoading: false,
    error: null,
    data: null,
  });
  const [userName, setUserName] = useState(localUsername);
  const [displayModal, setDisplayModal] = useState(false);

  // Save user
  const saveUser = () => {
    localStorage.setItem("course-task-user", userName);
  };

  // Filter search based on search key
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

  // Get user latitude and longitude
  function success(data) {
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    setUserLocationState({ longitude: long, latitude: lat });
  }

  let userLocation = navigator.geolocation;
  function getLocation() {
    if (userLocation) {
      setWeatherResponse({
        isLoading: true,
        data: null,
        error: null,
      });
      userLocation.getCurrentPosition(success);
    } else {
      setWeatherResponse({
        isLoading: false,
        data: null,
        error: "Geolocation is not supported by this browser",
      });
    }
  }

  // Fetch functions

  // Fetches the weather based on the given latitude and longitude
  const fetchWeather = () => {
    if (userLocationState.latitude && userLocationState.longitude) {
      setWeatherResponse({
        isLoading: true,
        data: null,
        error: null,
      });
      axios
        .get(
          `${process.env.REACT_APP_WEATHER_API_DOMAIN}/data/2.5/weather?lat=${userLocationState.latitude}&lon=${userLocationState.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then((res) => {
          setWeatherResponse({
            isLoading: false,
            data: res?.data,
            error: null,
          });
        })
        .catch((err) => {
          setWeatherResponse({
            isLoading: false,
            data: null,
            error: "No weather feedback available currently",
          });
        });
    }
  };

  // Fetch user location once component mounts
  useEffect(() => {
    getLocation();

    // eslint-disable-next-line
  }, []);

  // Fetch weather once the userLocation State has been updated with longitude and latitude
  useEffect(() => {
    fetchWeather();

    // eslint-disable-next-line
  }, [userLocationState.latitude]);

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
        weatherResponse,
        saveUser,
        userName,
        setUserName,
        displayModal,
        setDisplayModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
