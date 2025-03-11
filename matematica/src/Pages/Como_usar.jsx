import { useState } from "react";

import Footer from "../components/Footer";
import Header from '../components/header'
import Instagram from "/instagram.png";
import gmail from "/gmail.png";
import "./base.css";

function guilherme() {

  return (
    <>
     <Header/>

<article className="usar">

<h2> Como usar</h2>
<p> A álgebra é um ramo da Matemática que estuda e generaliza conceitos e definições, abrangendo diversas áreas de conhecimento. Ao ensinar álgebra no ensino fundamental, devemos abordar as diversas fórmulas matemáticas existentes, mostrando ao aluno a importância da disciplina.
</p>

<p>A álgebra é uma área da matemática que utiliza letras, números e operações para resolver problemas. Ela é usada em diversas áreas do conhecimento, como a engenharia, a computação, a física e a estatística. 
Para usar a álgebra, é preciso compreender conceitos como variáveis, termos e operações. </p>
</article>

     <Footer
        imgi={Instagram}
        insta="@guih.sdl"
        imge={gmail}
        email="ggsantana18@gmail.com"
        texto="Responsável pelo desenvolvimento: Guilherme Gabriel Santana"
      />
    </>
  );
}

export default guilherme;
