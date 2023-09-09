import styles from "./socials.module.css";
import Icon from "./icon";

export default function Socials() {
  return (
    <div className={styles.container}>
      <Icon network="linkedin" link="https://linkedin.com/in/nadinaoates"></Icon>
      <Icon network="twitter" link="https://twitter.com/N0_crypto"></Icon>
      <Icon network="youtube" link="https://youtube.com/@N0_crypto"></Icon>
      <Icon network="github" link="https://github.com/trashpirate"></Icon>
      <Icon network="telegram" link="https://t.me/oatestalkcrypto"></Icon>
    </div>
  );
}
