import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import classes from "./Header.module.css";

const Header = () => {
  // Context
  const { weatherResponse, userName, setDisplayModal } = useContext(AppContext);

  return (
    <section className={classes.container}>
      <h1>Course Management </h1>
      <div
        onClick={() => {
          setDisplayModal(true);
        }}
      >
        <img
          src="https://res.cloudinary.com/dmpdhnjqs/image/upload/v1695719548/user_fn3ixd.png"
          alt="User"
        />
        <span>{userName || "User"}</span>
      </div>
      <div className={classes.weather}>
        <span>Weather:</span>
        {!weatherResponse.data || weatherResponse.isLoading ? (
          <span>Loading...</span>
        ) : !weatherResponse.data && weatherResponse.error ? (
          <span>{weatherResponse?.error}</span>
        ) : (
          <>
            <span>Temperature: {weatherResponse.data?.main?.temp}&deg;C </span>
            <span>
              Feels like: {weatherResponse.data?.main?.feels_like}&deg;C
            </span>
            <span>City: {weatherResponse.data?.name}</span>
            <span>
              Max Temperature: {weatherResponse.data?.main?.temp_max}&deg;C
            </span>
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
