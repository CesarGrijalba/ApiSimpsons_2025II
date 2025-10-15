import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img src={character.Image} alt={character.Name} />
      <h3>{character.Name}</h3>
      <p>{character.Occupation}</p>
      <Link to={`/personaje/${character.id}`}>Ver más</Link>
    </div>
  );
}