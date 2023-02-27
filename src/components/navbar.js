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
        <ul className={`${styles.navbaritens} bg-transparent`}>
          {nav.map((item) => {
            return (
              <li key={item.name} className="bg-transparent">
                <Link className={`${styles.navlink} bg-transparent hover:underline`} href={item.url}
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
