import { BsArrowRight } from "react-icons/bs";
import styles from "./fancylink.module.css";

type Props = {
    link: string;
    title: string;
}

export default function FancyLink({ link, title }: Props) {
    return (
        <div className={styles.container_resume}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {title}{" "}
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
    );
}