import "./Sucursales.scss";

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
                    <Sucursal 
                        img="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                        title="responsive & retina" 
                        text="Este es un texto de ejemplo"/>
                    <Sucursal 
                        img="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                        title="responsive & retina" 
                        text="Este es un texto de ejemplo"/>
                    <Sucursal 
                        img="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                        title="responsive & retina" 
                        text="Este es un texto de ejemplo"/>
                </div>
            </div>
        </section>
    );
}

interface SucursalType {
    img: string,
    title: string,
    text: string
}

function Sucursal( {img,title,text}: SucursalType ){
    return(
        <div className="sucursal">
            <div className="sucursal__img">
                <img src={img} alt="img"/>
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