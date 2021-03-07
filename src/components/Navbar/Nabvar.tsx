import "./Navbar.scss";
import logo from '../../assets/images/logo.png';

export default function Navbar(){
    return (
        <div className="Navbar">
          <div className="Navbar__logo">
              <img src={logo} />
          </div>
            <ul className="Navbar__navs">
                <li className="Navbar__item">instalaciones</li>
                <li className="Navbar__item">gimnasios</li>
                <li className="Navbar__item">nosotros</li>
                <li className="Navbar__item">faq</li>
            </ul>
        </div>
    );
}