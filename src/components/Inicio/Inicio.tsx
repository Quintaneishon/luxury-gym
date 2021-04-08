import Logo from "../../assets/images/logo.png";
import "./Inicio.scss";

export default function Inicio(){
    return (
        <section className="section-inicio">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay={true} loop={true} muted={true}>
                    <source src="" type='video/mp4'/>
                    Your browser is not supported!
                </video>
            </div>
            <div className="logo">
                <img src={Logo} alt="logo"/>
                <p>LUXURY FITNESS CLUB</p>
            </div>
            <div className="button">
                <button className="btn btn--primary" type="button">try a free class</button>
            </div>
        </section>
    );
}
