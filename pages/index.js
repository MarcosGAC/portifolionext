import React from "react";
import styles from "../styles/style.module.css";
export default function Home() {
  return (
    <div className={styles.aboutcontent}>
      <h1 className={styles.title}>Oi! Eu sou Marcos Gabriel.</h1>
      <p className={styles.textcontent}>
        Estudante de sistemas de informação na Universidade Estadual de Montes
        Claros (UNIMONTES), sou fã de programação Web, principalmente quando se
        trata de desenvolvimento Front-End. Busco minha primeira experiência
        profissional na área.
      </p>
    </div>
  );
}
