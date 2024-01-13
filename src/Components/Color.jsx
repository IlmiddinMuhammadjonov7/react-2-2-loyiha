import React from "react";
import styles from "./color.module.css";

const Color = ({ sistem, rgb, hsl }) => {
  return (
    <div>
      <div style={{ background: `${sistem}` }} className={styles.color}></div>
      <h3 className={styles.color1}>{sistem}</h3>
      <div className={styles.color2}>
        <span>RGB</span>
        <span>{rgb}</span>
      </div>
      <div className={styles.color2}>
        <span>HSl</span>
        <span>{rgb}</span>
      </div>
    </div>
  );
};

export default Color;
