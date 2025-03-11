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


<article className="fontes">

<h2> Essas são as Fontes:</h2>

<ul>

<li>https://brasilescola.uol.com.br/o-que-e/matematica/o-que-e-algebra.htm</li>
<li>https://educador.brasilescola.uol.com.br/estrategias-ensino/formulas-algebricas-no-cotidiano.htm</li>


</ul>
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
