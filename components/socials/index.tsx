import styles from "./socials.module.css";
import Icon from "./icon";

export default function Socials() {
  return (
    <div className={styles.container}>
      <Icon network="linkedin" link="https://linkedin.com/in/nadinaoates"></Icon>
      <Icon network="twitter" link="https://twitter.com/0xTrashPirate"></Icon>
      <Icon network="telegram" link="https://t.me/EARNServices"></Icon>
      <Icon network="github" link="https://github.com/trashpirate"></Icon>
    </div>
  );
}
