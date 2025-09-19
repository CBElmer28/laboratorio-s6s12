import { useState, useEffect } from "react";

export default function ListaPostsFetch() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Lista de Posts (fetch)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} - {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
