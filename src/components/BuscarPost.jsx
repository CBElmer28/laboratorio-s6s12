import { useState } from "react";
import axios from "axios";

export default function BuscarPost() {
  const [id, setId] = useState("");
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(res.data);
      setError(null);
    } catch {
      setError("Post no encontrado");
      setPost(null);
    }
  };

  return (
    <div>
      <h2>Buscar Post por ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID del post"
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
