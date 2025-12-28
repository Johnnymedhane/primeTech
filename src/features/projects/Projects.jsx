import Title from "../../ui/Title";
import styles from "./Projects.module.css";
import ListItems from "../../ui/ListItems";

import {
  fetchProjects,
  getProjectsError,
  getProjectsStatus,
  selectAllProjects,
} from "./projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import CardList from "../../ui/CardList";
import { useNavigate } from "react-router-dom";

function Projects() {
  const projects = useSelector(selectAllProjects);
  const projectsStatus = useSelector(getProjectsStatus);
  const error = useSelector(getProjectsError);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  

  useEffect(() => {
    if (projectsStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  function handleButtonClick(projectId) {
    navigate(`/projects/${projectId}`);
    // not enough details to implement this yet
  }

  if (projectsStatus === "loading") return <Spinner />;
  if (projectsStatus === "failed") return <div>Error: {error}</div>;

  return (
    <section className={styles.projectsSection}>
      <Title title={`Featured <span>Projects</span>`} />
      <div className={styles.projectsList}>
        <ListItems
          data={projects}
          renderItem={(project) => (
            <CardList key={project.id}
             cardData={project} 
             ButtonText="View project" 
             onButtonClick={() => handleButtonClick(project.id)} />
          )}
        />
      </div>
    </section>
  );
}

export default Projects;
