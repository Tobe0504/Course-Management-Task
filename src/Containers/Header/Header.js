import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.container}>
      <h1>Course Management </h1>
      <div>
        <img
          src="https://res.cloudinary.com/dmpdhnjqs/image/upload/v1695719548/user_fn3ixd.png"
          alt="User"
        />
        <span>User</span>
      </div>
    </section>
  );
};

export default Header;
