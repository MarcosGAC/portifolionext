import CardProject from "@/src/components/cardproject";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module.css";
;


export default function Projects(props) {

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/MarcosGAC/projetos-api/projetos')
          .then(resposta => resposta.json())
          .then(dados => {
              setProjetos(dados)
          })
  }, [])
 

  return (
    <div className=" text-white   pl-[10%] pr-[10%] ">
      <div>
        <h1 className={styles.subtitle}>Projetos</h1>
        <p className={styles.skillstextcontent}>
          Meus projetos recentes
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
      {projetos.map(projeto =>{
         console.log(projeto)
        return(
          <CardProject name={projeto.name} img={projeto.img} link={projeto.link} key={projeto.id}/>
        )
       })}
      </div>
    </div>
  );
}
