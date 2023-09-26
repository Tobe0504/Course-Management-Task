import Layout from "../../Components/Layout/Layout";
import UserCoursePageListSection from "../../Containers/UserCoursePageLostSection/UserCoursePageListSection";
import UserCoursePageSearchSection from "../../Containers/UserCoursePageSearchSection/UserCoursePageSearchSection";

const UserCoursesPage = () => {
  return (
    <Layout>
      <UserCoursePageSearchSection />
      <UserCoursePageListSection />
    </Layout>
  );
};

export default UserCoursesPage;
