import Link from "next/link";
import React from "react";
import styles from "../../styles/style.module.css";

const nav = [
  {
    name: "Sobre mim",
    url: "/",
  },
  {
    name: "Habilidades",
    url: "/skills",
  },
  {
    name: "Projetos",
    url: "/projects",
  },
];

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navcontent}>
        <ul className={styles.navbaritens}>
          {nav.map((item) => {
            return (
              <li key={item.name}>
                <Link className={styles.navlink} href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
