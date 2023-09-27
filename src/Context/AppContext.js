import axios from "axios";
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
  const [userLocationState, setUserLocationState] = useState({
    longitude: null,
    latitude: null,
  });
  const [weatherResponse, setWeatherResponse] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

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
      console.log(userLocation.getCurrentPosition(success));
    } else {
      setWeatherResponse({
        isLoading: false,
        data: null,
        error: "Geolocation is  ot supported by thus browser",
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${userLocationState.latitude}&lon=${userLocationState.longitude}&appid=d5b5421e60a594af5e4605182e20ce49&units=metric`
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
