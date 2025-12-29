import Projects from "../features/projects/Projects";
import usePageTitle from "../hooks/usePageTitle";

function ProjectsPage() {
  usePageTitle("Projects");
  return <Projects />;
}

export default ProjectsPage;
