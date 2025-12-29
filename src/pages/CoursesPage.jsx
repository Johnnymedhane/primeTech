import Courses from "../features/courses/Courses";
import Testimonials from "../features/testimony/Testimonials";
import usePageTitle from "../hooks/usePageTitle";

function CoursesPage() {
  usePageTitle("Courses");
  return(
  <>
   <Courses />
  <Testimonials />
  </>
  )
}

export default CoursesPage;
