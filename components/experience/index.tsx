import styles from "./experience.module.css";
import jobData from "./experience.json";
import Card from "./card";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      {jobData.map((job) => (
        <Card key={job.id} {...job}></Card>
      ))}
      <div className={styles.container_resume}>
        <a href="https://www.linkedin.com/in/nadinaoates/details/experience/">View Full Resume </a>
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
