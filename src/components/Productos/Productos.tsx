import "./Productos.scss";

import productos from "../../assets/data/Productos.json";

export default function Productos(){
    return(
        <section className="section-productos moveInLeft">
            <div className="productos">
            {
                productos.map(({img},index) => (
                    <div className="producto" key={index}>
                        <img src={img} />
                    </div>
                ))
            }
            </div>
            <div className="productos--title">
                ¡Pregunta en la sucursal por todos nuestros productos y obtén un super descuento!
            </div>
        </section>
    );
}