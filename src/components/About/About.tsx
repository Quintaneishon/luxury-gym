import { useState } from "react";
import "./About.scss";
import icons from '../../assets/images/sprite.svg';

export default function About(){
    const profile = localStorage.getItem("profile");

    const [activeProfile, setActiveProfile] = useState<string>(profile ? profile : "mision");

    const navegar = ( lista: React.MouseEvent ) => {
        setActiveProfile((lista.target as HTMLButtonElement).id);
        localStorage.setItem("profile",(lista.target as HTMLButtonElement).id);
    }

    return(
        <section className="section-about moveInLeft">
            {
                (activeProfile == "mision")
                    ? <Mision />
                    : (activeProfile == "vision")
                        ? <Vision />
                        : (activeProfile == "filosofia")
                            ? <Filosofia />
                            : (activeProfile == "valores")
                                ? <Valores />
                                : (activeProfile == "foda")
                                    ? <Foda />
                                    : (activeProfile == "tabla")
                                        ? <Canvas />
                                        : <Desicion />
            }
            <div className="profiles">
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "mision" ? "activeProfile" : "")}
                    id="mision">
                        Misión
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "vision" ? "activeProfile" : "")}
                    id="vision">
                        Visión
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "filosofia" ? "activeProfile" : "")}
                    id="filosofia">
                        Filosofía
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "valores" ? "activeProfile" : "")}
                    id="valores">
                        Valores
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "foda" ? "activeProfile" : "")}
                    id="foda">
                        FODA
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "tabla" ? "activeProfile" : "")}
                    id="tabla">
                        Canvas
                </div>
                <div 
                    onClick={navegar} 
                    className={"profiles__item " + (activeProfile == "desicion" ? "activeProfile" : "")}
                    id="desicion">
                        Desición
                </div>
            </div>
            <div className="contact">
                <div className="contact__right">
                    <div className="contact__parte-1">
                        Oficina de Comunicaciones,Luxury Fitness Club<br></br>
                        &#9990; (55) 34759283 &nbsp;&nbsp; &#x2709; LuxuryFitnessClub@gmail.com
                    </div>
                    <div className="contact__parte-2">Luxury Fitness Club</div>
                    <div className="contact__parte-3">
                        <div className="contact__parte-3--fb">
                            <svg className="icon"><use xlinkHref={`${icons}#icon-facebook`}></use></svg>
                        </div>
                        <div className="contact__parte-3--insta">
                            <svg className="icon"><use xlinkHref={`${icons}#icon-instagram`}></use></svg>
                        </div>
                        <div className="contact__parte-3--twitt">
                            <svg className="icon"><use xlinkHref={`${icons}#icon-twitter`}></use></svg>
                        </div>
                        <div className="contact__parte-3--yt">
                            <svg className="icon"><use xlinkHref={`${icons}#icon-youtube`}></use></svg>
                        </div>
                    </div>
                </div>
                <div className="contact__left">
                    <div className="title">
                        contactanos
                    </div>
                    <div className="form">
                        <div className="input__group">
                            <input className="input__form input__form--name" type="text" placeholder="nombre" />
                            <input className="input__form input__form--email" type="text" placeholder="email"/>
                            <input className="input__form input__form--phone" type="text" placeholder="telefono"/>
                        </div>
                        <div className="input__group input__group--enviar">
                            <textarea placeholder="mensaje" className="input__form textarea" rows={5}></textarea>
                            <button type="button" className="btn btn--white">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Mision(){
    return(
        <div className="active-profile">
            <div className="active-profile--left">
                <img src="https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"/>
            </div>
            <div className="active-profile--right">
                Somos una empresa mexicana que busca brindar a nuestros socios una salud física y mental, para ayudarlos alcanzar sus objetivos individuales a través de nuestra amplia experiencia en el deporte y la sana alimentación. Haciendo esto posible con nuestro compromiso en siempre contar con un ambiente agradable, un amplio servicio y un personal calificado para apoyarlos dentro y fuera de nuestro complejo.
            </div>
        </div>
    );
}

function Vision(){
    return(
        <div className="active-profile">
            <div className="active-profile--left">
                <img src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
            </div>
            <div className="active-profile--right">
            Sel líder en gimnasios con alta calidad a nivel nacional, distinguido por un trato cercano, asesorías y entrenamientos con personal profesional, comprometidos con los objetivos de nuestros clientes. Generando valor a nuestra empresa, a nuestros colaboradores y a nuestra comunidad.
            </div>
        </div>
    );
}

function Filosofia(){
    return(
        <div className="active-profile">
            <div className="active-profile--left">
                <img src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"/>
            </div>
            <div className="active-profile--right">
            Se basa en la seriedad de nuestro trabajo para el beneficio de nuestros clientes, buscando ayudarlos a obtener una mejor calidad de vida.
            </div>
        </div>
    );
}

function Valores(){
    return(
        <div className="active-profile">
            <div className="active-profile--left">
                <img src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"/>
            </div>
            <div className="active-profile--right">
            <strong>▪ Lealtad</strong>
            &nbsp;&nbsp;Tenemos confianza en los principios y objetivos de nuestros servicios.
            <strong>▪ Exclusividad</strong>
            &nbsp;&nbsp;Que nuestros socios se sientan únicos en su trato, que sientan que nos
            importan y que se sientan escuchados y atendidos.
            <strong>▪ Calidad</strong>
            &nbsp;&nbsp;Ofrecer el mejor servicio a nuestros socios.
            <strong>▪ Optimismo</strong>
            &nbsp;&nbsp;En nuestro servicio, característico de nuestra empresa.
            <strong>▪ Compromiso</strong>
            &nbsp;&nbsp;Con los resultados de nuestros socios.
            </div>
        </div>
    );
}
function Foda(){
    return(
        <div className="active-profile">
            <div className="active-profile--all">
                <img src="https://drive.google.com/uc?export=view&id=10Kgzes11mnu_fQv_eyBENCsf5yxl8Jk6"/>
            </div>
        </div>
    );
}
function Canvas(){
    return(
        <div className="active-profile">
            <div className="active-profile--all">
                <img src="https://drive.google.com/uc?export=view&id=1mEeBhvypl2LamCBatVMZvU3wThKAqSEu"/>
            </div>
        </div>
    );
}

function Desicion(){
    return(
        <section className="section-desicion1">
            <div className="active-profile--all">
                <img className="img--desicion" src="https://drive.google.com/uc?export=view&id=1-LbI3etxqhnHFhjna7Z38_Ou10ZOCokO"/>
                <img className="img--desicion" src="https://drive.google.com/uc?export=view&id=1QdH3tBcUh0e462_D2mwkfVdQ3WSjLkzB"/>
                <img className="img--desicion" src="https://drive.google.com/uc?export=view&id=1WKOC_ScwhvPvNxvVyiWhg2YDUa8E1uQH"/>
            </div>
        </section>
    );
}