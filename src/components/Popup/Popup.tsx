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
                <img src="https://drive.google.com/uc?export=view&id=1rQ7eb9QCT3hjjQqd4rvI2ABZ2lDfBPXf"/>
            </div>
        </div>
    );
}