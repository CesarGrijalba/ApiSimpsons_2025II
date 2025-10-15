export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="pagination">
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>← Anterior</button>
      <span>Página {page} de {totalPages}</span>
      <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>Siguiente →</button>
    </div>
  );
}