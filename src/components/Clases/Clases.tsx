import "./Clases.scss";
import clases from "../../assets/data/Clases.json";

export default function Clases(){
    return(
        <section className="section-clases">
            <div className="bg-image">
                <img className="bg-image__content" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
            </div>
            <div className="clases">
                {
                    clases.map((clase, index) => (
                        <Clase key={index} img={clase.img} title={clase.title} />
                    ))
                }
            </div>
        </section>
    );
}

interface ClaseType{
    img: string,
    title: string,
}

function Clase({img,title}: ClaseType){

    return(
        <div className="clase">
            <div className="clase__image">
                <svg className="icon"><use xlinkHref={"/sprite.svg#"+img}></use></svg>
            </div>
            <div className="clase__title">
                {title}
            </div>
        </div>
    );
}