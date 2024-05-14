import styles from "./experience.module.css";
import jobData from "./experience.json";
import Card from "./card";
import { BsArrowRight } from "react-icons/bs";
import FancyLink from "../fancyLink";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      {jobData.map((job) => (
        <Card key={job.id} {...job}></Card>
      ))}
      <div className={styles.container_links}>
        <FancyLink link="/resume_nadinaoates_240117.pdf" title="Download Resume"></FancyLink>
        <FancyLink link="https://www.linkedin.com/in/nadinaoates" title="LinkedIn Profile"></FancyLink>
      </div>
    </div>
  );
}
