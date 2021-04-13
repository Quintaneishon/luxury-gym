import { useEffect, useState } from "react";
import instalaciones from "../../assets/data/Instalaciones.json";

import "./Instalaciones.scss";

export default function Instalaciones(){

    const[slideIndex, setSlideIndex] = useState<number>(0);

    const plusSlide = () => {
        if(slideIndex == instalaciones.length - 1) 
            setSlideIndex(0);
        else 
            setSlideIndex(slideIndex + 1);
    }

    const minusSlide = () => {
        if(slideIndex == 0) 
            setSlideIndex(instalaciones.length - 1);
        else
            setSlideIndex(slideIndex - 1);
    }
    
    return(
        <section className="section-instalaciones fade">
            {
                instalaciones.map((instalacion,index) => (
                    <div key={index} className={"mySlides fade" + ( slideIndex == index ? " img-active" : "")}>
                        <div className="numbertext">{index+1} / {instalaciones.length}</div>
                        <img src={instalacion.img} />
                        <div className="text">{instalacion.title}</div>
                    </div>
                ))
            }

            <a className="prev" onClick={() => minusSlide()}>&#10094;</a>
            <a className="next" onClick={() => plusSlide()}>&#10095;</a> 
        </section>
    );
}