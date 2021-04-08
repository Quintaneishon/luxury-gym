import { useState } from "react";

import Inicio from "../Inicio/Inicio";
import Navbar from "../Navbar/Nabvar";
import Sucursales from "../Sucursales/Sucursales";
import Clases from "../Clases/Clases";
import Instalaciones from "../Instalaciones/Instalaciones";
import About from "../About/About";
import Perfil from "../Perfil/Perfil";

import "./Home.scss";


export default function Home(){
  const[active, setActive] = useState<string>("home");
      
  const navegar = ( id: string ) => {
      setActive(id);
  }

  return (
      <div className="home">
        <Navbar navegar={navegar} active={active}/>
        {
          (active == "home")
            ? <Inicio />
            : (active == "sucursales")
              ? <Sucursales />
              : (active == "clases")
                ? <Clases />
                : (active == "instalaciones")
                  ? <Instalaciones />
                  : (active == "nosotros")
                    ? <About />
                    : (active == "perfil")
                      ? <Perfil />
                      : <></>
        }
      </div>
  );
}