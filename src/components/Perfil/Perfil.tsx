import { useState } from "react";
import perfil from "../../assets/data/Perfil.json";
import sucursales from "../../assets/data/Sucursales.json";

import "./Perfil.scss";

export default function Perfil(){

    const[email,setEmail] = useState<string>("");
    const[estado,setEstado] = useState<string>("imagen");

    const handleChange = ( e: React.FormEvent<HTMLInputElement> ) => {
        setEmail(e.currentTarget.value);
    }

    const getDatos = () => {
        setEstado("datos")
    }

    return(
        <section className="section-perfil moveInLeft">
            <div className="login">
                <div className="login__left">
                    {
                        (estado == "imagen")
                        ? <Imagen />
                        : <Datos email={email} />
                    }
                </div>
                <div className="login__right">
                    <div className="login__right--title">Login</div>
                    <div className="login__right--input-group">
                        <input type="text" onChange={handleChange} name="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                    </div>
                    <button className="login__right--btn btn btn--primary" onClick={() => getDatos()} type="button">LOGIN</button>
                </div>
            </div>
        </section>
    );
}

function Imagen(){
    return(
        <img src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80" alt="login"/>
    );
}

function Datos( {email}: {email: string} ){
    const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return(
        <div className="datos">
            <div className="datos__item datos__usuario">
                Usuario<br></br>
                <span className="datos__item--value">{email}</span>
            </div>
            <div className="datos__item datos__sucursal">
                Sucursal<br></br>
                <span className="datos__item--value">{sucursales[Math.floor(Math.random() * sucursales.length)].title}</span>
            </div>
            <div className="datos__item datos__plan">
                Plan<br></br>
                <span className="datos__item--value">{perfil.planes[Math.floor(Math.random() * perfil.planes.length)]}</span>
            </div>
            <div className="datos__item datos__saldo">
                Saldo<br></br>
                <span className="datos__item--value">$ {numberWithCommas(Math.floor(Math.random() * perfil.saldo))}</span>
            </div>
        </div>
    );
}