import Bloquinhos from './components/blocos'
import Galeria from './components/slideShow'

import Imagem1 from './assets/imagem1.jpg'
import Imagem2 from './assets/imagem2.jpg'
import Imagem3 from './assets/imagem3.jpg'

import './App.css'

function App() {

  return (
    <>
    

<Bloquinhos imagem={Imagem1} titulo='bloco1' texto='aowirowiuebcouayrfbu9y HBFEOWUFBYY AIRGBAEYRGB'/>
<Galeria/>
<Bloquinhos imagem={Imagem2} titulo='bloco2' texto='aowirowiuebcouayrfbu9y HBFEOWUFBYY AIRGBAEYRGB'/>



    </>
  )
}

export default App
