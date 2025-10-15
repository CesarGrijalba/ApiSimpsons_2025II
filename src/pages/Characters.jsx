import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
        const data = await res.json();
        setCharacters(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  if (loading) return <Loader />;

  return (
    <div className="page">
      <h2>Personajes</h2>
      <div className="cards">
        {characters.map((ch) => (
          <CharacterCard key={ch.id} character={ch} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}