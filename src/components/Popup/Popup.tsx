import "./Popup.scss";

export default function Popup(){

    const cerrar = ( link: React.MouseEvent ) => {
        link.preventDefault();
        document.getElementsByClassName("popup")[0].classList.remove("popup--active");
        sessionStorage.setItem("nuevo","false");
    }

    return(
        <div className={`popup ${sessionStorage.getItem("nuevo") == "false" ? "" : "popup--active"}`} >
            <div className='popup__content'>
                <a href="" onClick={cerrar}  className='popup__close'>&times;</a>
                <img src="https://res.cloudinary.com/ddzl7xymq/image/upload/v1618634999/bwmhrbfyq3gmvzbtrokw.jpg"/>
            </div>
        </div>
    );
}