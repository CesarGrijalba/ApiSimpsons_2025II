import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/episodes")
      .then((res) => res.json())
      .then(setEpisodes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="page">
      <h2>Episodios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Temporada</th>
            <th>Número</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((e) => (
            <tr key={e.id}>
              <td>{e.Name}</td>
              <td>{e.Season}</td>
              <td>{e.Episode}</td>
              <td>{e.AirDate || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}