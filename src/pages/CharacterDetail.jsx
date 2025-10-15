import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

export default function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setChar)
      .catch(console.error);
  }, [id]);

  if (!char) return <Loader />;

  return (
    <div className="detail">
      <img src={char.Image} alt={char.Name} />
      <h2>{char.Name}</h2>
      <p><b>Ocupación:</b> {char.Occupation}</p>
      <p><b>Estado:</b> {char.Status}</p>
      <p><b>Frase célebre:</b> {char.Quote || "No disponible"}</p>
    </div>
  );
}