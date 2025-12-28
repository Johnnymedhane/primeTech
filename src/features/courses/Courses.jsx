import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ListItems from "../../ui/ListItems"
import Title from "../../ui/Title.jsx";
import styles from './Courses.module.css'
import { getCoursesStatus, selectAllCourses, fetchCourses, getCoursesError } from "./coursesSlice.js";
import Spinner from "../../ui/Spinner.jsx";
import CardList from "../../ui/CardList.jsx";
import { useNavigate } from "react-router-dom";



function Courses() {

  const dispatch = useDispatch();
  const courses = useSelector(selectAllCourses);
  const coursesStatus = useSelector(getCoursesStatus);
  const error = useSelector(getCoursesError);
 

  const isLoading = coursesStatus === "loading";
  const navigate = useNavigate();

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [coursesStatus, dispatch]);


   function handleButtonClick(courseId) {
    navigate(`/courses/${courseId}`);
    // no enough details to implement this yet
    
 
  }

  return (
   <section className={styles.coursesSection} >
    <Title title="Our Courses"></Title>
   {isLoading && <Spinner />}
   {coursesStatus === "failed" && <div>{error}</div>}
    <div className={styles.coursesList}>
      <ListItems 
      data={courses} 
      renderItem={(course) => (
        <CardList key={course.id} 
        cardData={course} 
        ButtonText="View course" 
        onButtonClick={() => handleButtonClick(course.id)} />
      )} />
    </div>
   </section>
  )
}

export default Courses
