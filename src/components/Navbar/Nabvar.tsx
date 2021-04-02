import "./Navbar.scss";
import Logo from '../../assets/images/logo.png';
import { useState } from "react";

export default function Navbar(){

    const[active, setActive] = useState<string>("home")
    
    const navegar = ( lista: React.MouseEvent ) => {
        setActive((lista.target as HTMLButtonElement).id);
    }

    return (
        <div className="Navbar">
          <div className="Navbar__logo">
              <img src={Logo} />
          </div>
            <ul className="Navbar__navs">
                <li onClick={navegar} className={"Navbar__item" + ( active == "home" ? " active" : "")} id="home" >home</li>
                <li onClick={navegar} className={"Navbar__item" + ( active == "sucursales" ? " active" : "")} id="sucursales" >sucursales</li>
                <li onClick={navegar} className={"Navbar__item" + ( active == "instalaciones" ? " active" : "")} id="instalaciones" >instalaciones</li>
                <li onClick={navegar} className={"Navbar__item" + ( active == "clases" ? " active" : "")} id="clases" >clases</li>
                <li onClick={navegar} className={"Navbar__item" + ( active == "productos" ? " active" : "")} id="productos" >productos</li>
                <li onClick={navegar} className={"Navbar__item" + ( active == "nosotros" ? " active" : "")} id="nosotros" >nosotros</li>
            </ul>
        </div>
    );
}