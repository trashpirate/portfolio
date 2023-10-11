import styles from "./experience.module.css";
import jobData from "./experience.json";
import Card from "./card";
import { BsArrowRight } from "react-icons/bs";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      {jobData.map((job) => (
        <Card key={job.id} {...job}></Card>
      ))}
      <div className={styles.container_resume}>
        <a href={"/resume_nadinaoates_231010.pdf"} target="_blank" rel="noopener noreferrer">
          Download Resume{" "}
        </a>
        <p>
          <BsArrowRight
            style={{
              verticalAlign: "middle",
              margin: "auto 10px",
            }}
          />
        </p>
      </div>
      <div className={styles.container_resume}>
        <a href={"https://www.linkedin.com/in/nadinaoates"}>LinkedIn Profile </a>
        <p>
          <BsArrowRight
            style={{
              verticalAlign: "middle",
              margin: "auto 10px",
            }}
          />
        </p>
      </div>
    </div>
  );
}
