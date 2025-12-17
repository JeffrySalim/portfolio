import React from "react";

import styles from "./Avatar.module.css";
import { getImageUrl } from "../../utils";

export const Avatar = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("avatar/avatar.png")}
        alt="Avatar image of me"
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jeffry Salim</h1>
        <p className={styles.description}>
          Seeking Backend Developer Internship | Eager to Learn & Contribute | Grad Student at Esa Unggul University 
        </p>
        <a href="mailto:sjeffry21@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
