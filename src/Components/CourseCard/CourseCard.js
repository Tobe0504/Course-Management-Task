import classes from "./CourseCard.module.css";

const CourseCard = () => {
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
            <span>Design</span>
          </span>
          <span>Duration: 3 months</span>
        </div>
        <h4 className={classes.nameSection}>
          AWS Certified solutions Architect
        </h4>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </p>
        <div className={classes.tutorSection}>
          <span>Tutor</span>
          <span>$80</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
