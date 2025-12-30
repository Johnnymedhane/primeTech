import { BrowserRouter, Navigate,  Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { Suspense, lazy } from "react"
import Spinner from "./ui/Spinner"

const AppLayout = lazy(() => import("./ui/AppLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CourseDetails = lazy(() => import("./features/courses/CourseDetails"));
const ProjectDetails = lazy(() => import("./features/projects/ProjectDetails"));

function App() {
  

  return (
    <BrowserRouter basename="/primeTech">
      <Toaster 
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      <Suspense fallback={<Spinner size="large" />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App




