import pokedex from "../public/pokedex.png";
import netflix from "../public/netflix.png";
import NLW from "../public/NLW.png";
import styles from "../styles/style.module.css";
import CardProject from "@/src/components/cardproject";


export default function Projects(props) {


  return (
    <div className=" text-white   pl-[10%] pr-[10%] ">
      <div>
        <h1 className={styles.subtitle}>Projetos</h1>
        <p className={styles.skillstextcontent}>
          Meus projetos recentes
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <CardProject
          name="A project based in netflix to train react Rooks"
          img={netflix}
          link={"https://estudo-net-flix.vercel.app/"}
        />
        <CardProject
          name="Project developed for housing management"
          img={NLW}
          link={"https://habits-web-ten.vercel.app/"}
        />
        <CardProject
          name="A pokédex created with Reactjs to practice"
          img={pokedex}
          link={"https://pokedex-pokeapi-two.vercel.app/"}
        />
        <CardProject name="shortly" link="" />
      </div>
    </div>
  );
}
