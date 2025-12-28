import {  getCoursesStatus, fetchCourseById, getSelectedCourse, clearSelectedCourse, getCoursesError } from "./coursesSlice";
import styles from './CourseDetails.module.css'
import useCardDetails from "../../hooks/useCardDetails";
import Spinner from "../../ui/Spinner";

function CourseDetails() {
  const { entity: course, status, error } = useCardDetails(
    'courseId', 
    getSelectedCourse, 
    getCoursesStatus,
    getCoursesError,
    clearSelectedCourse,
    fetchCourseById
  );

  if (status === "loading") {
    return <Spinner size="large" />;
  }

  if (!course) {
    return <div className={styles.notFound}>Course not found {error}
     </div>;
  }
 
  return (
    <div className={styles.courseDetails}>
      <h2>{course?.title}</h2>
      <p>{course?.description}</p>
      <p>Duration: {course?.duration} hours</p>
      <p>Instructor: {course?.instructor}</p>
    </div>
  )
}

export default CourseDetails
