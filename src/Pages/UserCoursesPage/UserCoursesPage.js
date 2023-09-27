import { useContext, useEffect, useRef } from "react";
import Layout from "../../Components/Layout/Layout";
import UserNameModal from "../../Components/Modals/AcceptedModal/UserNameModal";
import UserCoursePageListSection from "../../Containers/UserCoursePageLostSection/UserCoursePageListSection";
import UserCoursePageSearchSection from "../../Containers/UserCoursePageSearchSection/UserCoursePageSearchSection";
import UserNameModalBody from "../../Containers/UserNameModalBody.js/UserNameModalBody";
import { AppContext } from "../../Context/AppContext";

const UserCoursesPage = () => {
  // Context
  const { userName, displayModal, setDisplayModal } = useContext(AppContext);

  // Effects
  useEffect(() => {
    if (!userName) {
      setDisplayModal(true);
    } else {
      setDisplayModal(false);
    }

    // eslint-disable-next-line
  }, []);

  // Refs
  const courseListRef = useRef(null);

  return (
    <Layout>
      {displayModal && (
        <UserNameModal
          body={
            <UserNameModalBody
              onClick={() => {
                setDisplayModal(false);
              }}
            />
          }
          onClick={() => {
            setDisplayModal(false);
          }}
        />
      )}
      <UserCoursePageSearchSection courseListRef={courseListRef} />
      <div ref={courseListRef}>
        <UserCoursePageListSection />
      </div>
    </Layout>
  );
};

export default UserCoursesPage;
