import { getSelectedProject, getProjectsStatus, fetchProjectById, clearSelectedProject, getProjectsError } from "./projectsSlice";
import styles from './ProjectDetails.module.css'
import useCardDtails from "../../hooks/useCardDetails";
import Spinner from "../../ui/Spinner";

function ProjectDetails() {
  const { entity: project, status, error } = useCardDtails(
    'projectId', 
    getSelectedProject, 
    getProjectsStatus,
    getProjectsError,
    clearSelectedProject,
    fetchProjectById
  );
console.log("ProjectDetails render:", project);
  if (status === "loading") {
    return <Spinner size="large" />;
  }

  if (!project) {
    return <div className={styles.notFound}>Project not found {error}</div>;
  }
 
  return (
    <div className={styles.projectDetails}>
      <h2>{project?.title}</h2>
      <h3>{project?.subtitle}</h3>
      <p>{project?.description}</p>
    </div>
  )
}

export default ProjectDetails
