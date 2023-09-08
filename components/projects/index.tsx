import styles from "./projects.module.css";
import jobData from "./projects.json";
import Card from "./card";

export default function Projects() {
  return (
    <div className={styles.container} id="projects">
      {jobData.map((job) => (
        <Card {...job}></Card>
      ))}
    </div>
  );
}
