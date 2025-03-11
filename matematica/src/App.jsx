import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import Como_usar from './Pages/Como_usar'
import Fontes from './Pages/fontes'
import "./App.css";



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/Como_usar" element={<Como_usar/>} />
          <Route path="/Fontes" element={<Fontes/>} />
         
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
