import "./Navbar.scss";
import Logo from '../../assets/images/logo.png';
import icons from '../../assets/images/sprite.svg';

export default function Navbar({navegar, active}: any){

    return (
        <div className="Navbar">
          <div className="Navbar__logo">
              <img src={Logo} />
          </div>
            <ul className="Navbar__navs">
                <li onClick={() => navegar("home")} className={"Navbar__item" + ( active == "home" ? " active" : "")} >home</li>
                <li onClick={() => navegar("sucursales")} className={"Navbar__item" + ( active == "sucursales" ? " active" : "")} >sucursales</li>
                <li onClick={() => navegar("instalaciones")} className={"Navbar__item" + ( active == "instalaciones" ? " active" : "")} >instalaciones</li>
                <li onClick={() => navegar("clases")} className={"Navbar__item" + ( active == "clases" ? " active" : "")} >clases</li>
                <li onClick={() => navegar("productos")} className={"Navbar__item" + ( active == "productos" ? " active" : "")} >productos</li>
                <li onClick={() => navegar("nosotros")} className={"Navbar__item" + ( active == "nosotros" ? " active" : "")} >nosotros</li>
                <li onClick={() => navegar("perfil")} className={"Navbar__item" + ( active == "perfil" ? " active" : "")} >
                    <svg onClick={() => navegar("perfil")} id="perfil"><use xlinkHref={`${icons}#icon-person`}></use></svg>
                </li>
            </ul>
            <ul className="Navbar__navs Navbar__navs--small">
                <li onClick={() => navegar("home")} className={"Navbar__item" + ( active == "home" ? " active" : "")} >
                    <svg onClick={() => navegar("home")} id="perfil"><use xlinkHref={`${icons}#icon-home`}></use></svg>
                </li>
                <li onClick={() => navegar("sucursales")} className={"Navbar__item" + ( active == "sucursales" ? " active" : "")} >
                    <svg onClick={() => navegar("sucursales")} id="perfil"><use xlinkHref={`${icons}#icon-sucursales`}></use></svg>
                </li>
                <li onClick={() => navegar("instalaciones")} className={"Navbar__item" + ( active == "instalaciones" ? " active" : "")} >
                    <svg onClick={() => navegar("instalaciones")} id="perfil"><use xlinkHref={`${icons}#icon-instalaciones`}></use></svg>
                </li>
                <li onClick={() => navegar("clases")} className={"Navbar__item" + ( active == "clases" ? " active" : "")} >
                    <svg onClick={() => navegar("clases")} id="perfil"><use xlinkHref={`${icons}#icon-clases`}></use></svg>
                </li>
                <li onClick={() => navegar("productos")} className={"Navbar__item" + ( active == "productos" ? " active" : "")} >
                    <svg onClick={() => navegar("productos")} id="perfil"><use xlinkHref={`${icons}#icon-productos`}></use></svg>
                </li>
                <li onClick={() => navegar("nosotros")} className={"Navbar__item" + ( active == "nosotros" ? " active" : "")} >
                    <svg onClick={() => navegar("nosotros")} id="perfil"><use xlinkHref={`${icons}#icon-nosotros`}></use></svg>
                </li>
                <li onClick={() => navegar("perfil")} className={"Navbar__item" + ( active == "perfil" ? " active" : "")} >
                    <svg onClick={() => navegar("perfil")} id="perfil"><use xlinkHref={`${icons}#icon-person`}></use></svg>
                </li>
            </ul>
        </div>
    );
}