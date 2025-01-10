import React from "react";
import styles from "./home.module.css"
import Projetos from "./projetos";

const Home = () => {
  return (
    <main className={`${styles.mainContent} animeLeft`}>
      <div className={styles.foto}></div>
      <div className={styles.descricao}>
          <h1 className="title">Sobre Mim</h1>
          <p>
            Olá, meu nome é Luan Thierry Silvino Pacifico, sou estudante de mestrado em matemática aplicada com experiência
            em computação. Atualmente, estou trabalhando no meu projeto de mestrado em conjunto com a FAPESP, EPIC no desenvolvimento do OPM Flow. 
          </p>
          <p>
            Sou apaixonado por Matemática, Computação, Programação, Música e muitas outras coisas. Procuro sempre apreeder com outras pessoas e 
            gosto de participar de projetos em equipe. 
          </p>
          <h1 className="title">Pricipais Aéras de Interesse</h1>
          <Projetos />
      </div>
    </main>
  )
}

export default Home