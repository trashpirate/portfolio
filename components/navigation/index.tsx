import Link from "next/link";
import styles from "./navigation.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"#about"}>
        <hr className={styles.line} />
        ABOUT
      </Link>
      <Link className={styles.link} href={"#experience"}>
        <hr className={styles.line} />
        EXPERIENCE
      </Link>
      <Link className={styles.link} href={"#projects"}>
        <hr className={styles.line} />
        PROJECTS
      </Link>
    </div>
  );
}
