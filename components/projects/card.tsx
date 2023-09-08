import styles from "./projects.module.css";
import Image from "next/image";
import { BiLinkAlt } from "react-icons/bi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface JobProps {
  image: string;
  title: string;
  links: any[];
  description: string;
  tools: string[];
  dates: string;
}

export default function Card({ image, title, links, description, tools, dates }: JobProps) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_left}>
        <Image
          src={image}
          width={200}
          height={160}
          alt="dapp project"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "5px",
            boxShadow: "0 0 5px #00e0a7",
            marginTop: "5px",
          }}
        />
      </div>
      <div className={styles.card_right}>
        <div className={styles.card_title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.card_description}>{description}</div>
        <div className={styles.card_links}>
          {links.map((link) => (
            <a className={styles.card_link} href={link.url}>
              <p>
                <BiLinkAlt
                  style={{
                    fontWeight: "light",
                    margin: "auto 5px",
                    verticalAlign: "middle",
                  }}
                />
                {link.name}
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
