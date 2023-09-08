import styles from "./projects.module.css";
import projectData from "./projects.json";
import Card from "./card";

export default function Projects() {
  return (
    <div className={styles.container} id="projects">
      {projectData.map((project) => (
        <Card key={project.id} {...project}></Card>
      ))}
    </div>
  );
}
