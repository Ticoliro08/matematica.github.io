import Header from "../components/header.jsx";
import Footer from "../components/Footer";
import Meio from '../components/meio.jsx'
import Instagram from "/instagram.png";
import gmail from "/gmail.png";

import "../App.css";

function App() {
  return (
    <>
      <Header />
     
<Meio/>
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

export default App;
