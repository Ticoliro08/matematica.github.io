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
