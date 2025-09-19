import { useState, useEffect } from "react";
import axios from "axios";

export default function UsuariosAsync() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsuarios(res.data);
      } catch {
        setError("Error al cargar usuarios");
      } finally {
        setCargando(false);
      }
    };
    cargarUsuarios();
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Usuarios (axios async/await)</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}