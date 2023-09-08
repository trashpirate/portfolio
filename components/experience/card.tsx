import styles from "./experience.module.css";
import { BiLinkAlt } from "react-icons/bi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface JobProps {
  id: number;
  title: string;
  company: string;
  website: string;
  description: string;
  tools: string[];
  dates: string;
  projects: any[];
}

export default function Card({
  id,
  title,
  company,
  website,
  description,
  tools,
  dates,
  projects,
}: JobProps) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_left}>
        <div>{dates}</div>
      </div>
      <div className={styles.card_right}>
        <div className={styles.card_title}>
          <h2>{title}</h2>
          <a href={website}>
            <h3>
              {company}
              <LiaExternalLinkAltSolid
                style={{
                  fontWeight: "light",
                  verticalAlign: "bottom",
                  margin: "auto 5px",
                  paddingBottom: "5px",
                }}
              />
            </h3>
          </a>
        </div>
        <div className={styles.card_description}>{description}</div>
        <div className={styles.card_projects}>
          {projects.map((project) => (
            <a key={project.id} className={styles.card_project} href={project.url}>
              <p>
                <BiLinkAlt
                  style={{
                    fontWeight: "light",
                    margin: "auto 5px",
                    verticalAlign: "middle",
                  }}
                />
                {project.name}
              </p>
            </a>
          ))}
        </div>
        <div className={styles.card_tools}>
          {tools.map((tool) => (
            <div className={styles.card_tool}>{tool}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
