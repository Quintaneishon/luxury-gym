import Inicio from "../Inicio/Inicio";
import Navbar from "../Navbar/Nabvar";
import { useState } from "react";

import "./Home.scss";
import Sucursales from "../Sucursales/Sucursales";
import Clases from "../Clases/Clases";


export default function Home(){
  const[active, setActive] = useState<string>("home")
      
  const navegar = ( lista: React.MouseEvent ) => {
      setActive((lista.target as HTMLButtonElement).id);
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
                : <></>
        }
      </div>
  );
}