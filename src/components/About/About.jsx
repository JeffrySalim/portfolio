import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm an Informatics Engineering graduate passionate about software development, especially backend development with Java. 
                I'm currently improving my coding, Git, and back-end skills through self-study. 
                I have a strong interest in building secure, scalable, and efficient applications. 
                My goal is to become a full-stack developer capable of delivering impactful end-to-end solutions.
              </p>
            </div>
          </li>          
        </ul>
      </div>
    </section>
  );
};
