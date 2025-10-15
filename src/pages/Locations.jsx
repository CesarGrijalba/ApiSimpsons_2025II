import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/locations")
      .then((res) => res.json())
      .then(setLocations)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="page">
      <h2>Lugares Icónicos</h2>
      <ul>
        {locations.map((l) => (
          <li key={l.id}>
            <h3>{l.Name}</h3>
            <p>{l.Type}</p>
            <p>{l.Description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}