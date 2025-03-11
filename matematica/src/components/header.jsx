import { Link } from "react-router-dom";

import "./header.css";
import Logo from "../../public/Algebra.png";

function cabecalho() {
  
  return (
    <>
      <header>
          <img className="logo" src={Logo} alt="logo" width="30%" />
       
        <h1> ALGEBRA</h1>

      </header>

      <nav id="menu">

      <Link className="aba" to='/Home' > Home </Link>
      <Link className="aba" to='/Como_usar' > Como usar </Link>
      <Link className="aba" to='/Fontes' > Fontes </Link>

        
      </nav>
    </>
  );
}

export default cabecalho;
