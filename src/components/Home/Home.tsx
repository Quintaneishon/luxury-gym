import Inicio from "../Inicio/Inicio";
import Navbar from "../Navbar/Nabvar";
import "./Home.scss";

export default function Home(){
    return (
        <div className="home">
          <Navbar/>
          <Inicio />
        </div>
    );
}