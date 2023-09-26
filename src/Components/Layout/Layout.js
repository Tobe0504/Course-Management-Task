import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={classes.container}>
      <nav className={classes.header}>
        <Header />
      </nav>
      <div className={classes.body}>{children}</div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
