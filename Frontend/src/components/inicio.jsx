import { Link } from "react-router-dom";
import "../App.css";

function Inicio() {
  return (
    <div className="mt-4 p-5 rounded text-center" style={{ backgroundColor: "lightgray" }}>
      <h1>DISTRIBUIDORA</h1>
      <p>
      Nos enorgullece ser su socio de confianza para todas sus necesidades de distribución. Con años de experiencia en el mercado, ofrecemos una amplia gama de productos de alta calidad. Nuestro compromiso es proporcionar un servicio excepcional, precios competitivos y entregas puntuales para asegurar que su negocio funcione sin contratiempos. Explore nuestra selección y descubra por qué somos la opción preferida de tantas empresas. ¡Estamos aquí para servirle!
      </p>
      <Link to="/menu" className="btn btn-lg btn-primary">
        <i className="fa fa-search"> </i>  Conocer mas
      </Link>
    </div>
  );
}
export default Inicio;
