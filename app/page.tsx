import Intro from "@/components/intro";
import styles from "./page.module.css";
import About from "@/components/about";
import Socials from "@/components/socials";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Navigation from "@/components/navigation";
import FancyLink from "@/components/fancyLink";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.column_left}>
          <div>
            <Intro></Intro>

            <Navigation></Navigation>
            <FancyLink link="https://t.me/EARNServices" title="BOOK MY SERVICES"></FancyLink>
          </div>
          <div>
            <Socials></Socials>
            <footer>Copyright 2024 @ Nadina (Oates) Zweifel</footer>
          </div>
        </div>
        <div className={styles.column_right}>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
        </div>
      </main>
    </>
  );
}
