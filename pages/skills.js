import css from "../public/css.svg";
import styles from "../styles/style.module.css";
import javascript from "../public/javascript.svg";
import Git from "../public/Git.svg";
import html from "../public/html.svg";
import nodejs from "../public/nodejs.svg";
import reactjs from "../public/reactjs.svg";
import tailwindcss from "../public/tailwindcss.svg";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    name: css,
    description: "logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: javascript,
    description: "logo",
    link: "https://www.javascript.com/",
  },
  {
    name: Git,
    description: "logo",
    link: "https://git-scm.com/",
  },
  {
    name: html,
    description: "logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: nodejs,
    description: "logo",
    link: "https://nodejs.org/en/docs/",
  },
  {
    name: reactjs,
    description: "logo",
    link: "https://pt-br.reactjs.org/",
  },
  {
    name: tailwindcss,
    description: "logo",
    link: "https://tailwindcss.com/",
  },
];

export default function Skills() {
  return (
    <div className={styles.skillscontent}>
      <h1 className={styles.subtitle}>Habilidades</h1>

      <h2 className={styles.skillstextcontent}>Algumas das minhas habilidades:</h2>
      <div className={styles.skillsitems}>
        {items.map((item) => {
          return (
            <Link
              href={item.link}
              className={styles.skillscard}
              key={item.link}
            >
              <Image
                className={styles.skillsimage}
                src={item.name}
                alt={`${item.description} ${item.name}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
