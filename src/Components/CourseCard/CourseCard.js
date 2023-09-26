import classes from "./CourseCard.module.css";
import Button from "../../Components/Button/Button";
import capitalize from "../../Utilities/capitalize";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const CourseCard = ({ data, index }) => {
  // Context
  const { isEnrollingActiveHandler } = useContext(AppContext);

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <img
          src="https://res.cloudinary.com/dmpdhnjqs/image/upload/v1695719312/cld-sample-5.jpg"
          alt="Name"
        />
      </div>
      <div className={classes.textSection}>
        <div className={classes.categoryAndTime}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="0.5"
                y="11.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="11.5"
                y="11.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="11.5"
                y="0.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
            </svg>
            <span>{capitalize(data?.category)}</span>
          </span>
          <span>Duration: {data?.durationInMonths} months</span>
        </div>
        <h4 className={classes.nameSection}>{data?.title}</h4>
        <p className={classes.description}>{data?.description}</p>
        <div className={classes.tutorSection}>
          <span>Tutor: {data?.tutor}</span>
          <span>
            {data.isEnrolling ? (
              <Button
                type="secondary"
                onClick={() => {
                  isEnrollingActiveHandler(data.title);
                }}
              >
                Disenroll
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={() => {
                  isEnrollingActiveHandler(data.title);
                }}
              >
                Enroll
              </Button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
