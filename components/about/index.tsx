import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <p>
        What do <strong>Neuroscience</strong>, <strong>AI</strong>, and <strong>Blockchain</strong>{" "}
        have in common? These are fields that are constantly evolving and might change the world in
        significant ways - some believe for the better, others for the worse. The potential and
        controversy of these fields have always fascinated me and stimulated my curiosity to learn
        more about them.
      </p>
      <br />
      <p>
        During my PhD, I discovered my love for programming and software development while I
        developed a broad skill set including a variety of programming languages including{" "}
        <em>Python</em>, <em>C++</em> , <em>MATLAB</em>, experimental design, project management,
        data collection, signal processing, data analysis, statistics, and machine learning. In a
        summer internship at Shure Inc., I applied these skills to real world problems and acquired
        additional knowledge in cloud services such as <em>AWS</em>, <em>AI</em>, and{" "}
        <em>Deep Learning</em>.
      </p>
      <br />
      <p>
        Besides my scientific work, I'm enthusiastic for blockchain technology and crypto. Starting
        out as an investor, I became more and more interested in the application of blockchain
        beyond cryptocurrencies. Since 2020, I have become increasingly involved in the Web3
        industry by independently acquiring Web3 development skills such as <em>Smart Contracts</em>
        , <em>Solidity</em>, <em>React/NextJS</em>, and <em>Nest API</em>, taking on a leading role
        in two cryptocurrency projects, regularly hosting{" "}
        <a href="https://oatestalkcrypto.eventbrite.com">crypto community events</a>, and running a
        crypto/blockchain themed <a href="https://www.youtube.com/@N0_crypto">YouTube Channel</a>.
      </p>
    </div>
  );
}
