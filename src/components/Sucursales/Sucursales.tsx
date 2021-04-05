import "./Sucursales.scss";
import sucursales from "../../assets/data/Sucursales.json";

export default function Sucursales(){
    return(
        <section className="section-sucursales">
            <div className="bg-image">
                <img className="bg-image__content" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
            </div>
            <div className="top-part">
                <div className="top-part__title">
                    <span>No es fácil, pero nunca te rindas.</span>
                </div>
                <div className="top-part__sucursales">
                    {
                        sucursales.map((sucursal, index) => (
                            <Sucursal 
                                key={index}
                                title={sucursal.title}
                                text={sucursal.text}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

function Sucursal( {title,text}: SucursalType ){
    return(
        <div className="sucursal">
            <div className="sucursal__img">
                <svg className="icon"><use xlinkHref={"/sprite.svg#icon-location_on"}></use></svg>
            </div>
            <div className="sucursal__title">
                {title}
            </div>
            <div className="sucursal__text">
                {text}
            </div>
        </div>
    );
}

interface SucursalType {
    title: string;
    text:  string;
}