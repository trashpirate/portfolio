import Intro from "@/components/intro";
import styles from "./page.module.css";
import { Content } from "next/font/google";
import About from "@/components/about";
import Socials from "@/components/socials";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.column_left}>
        <div>
          <Intro></Intro>
          <Navigation></Navigation>
        </div>

        <Socials></Socials>
      </div>
      <div className={styles.column_right}>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </main>
  );
}
