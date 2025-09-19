import { useState, useEffect } from "react";
import axios from "axios";

export default function ListaAlbumsAxios() {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setAlbums(res.data))
      .catch(() => setError("No se pudieron cargar los álbumes"));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Lista de Álbumes (axios)</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
