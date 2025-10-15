import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>The Simpsons API</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/personajes">Personajes</Link></li>
        <li><Link to="/lugares">Lugares</Link></li>
        <li><Link to="/episodios">Episodios</Link></li>
      </ul>
    </nav>
  );
}