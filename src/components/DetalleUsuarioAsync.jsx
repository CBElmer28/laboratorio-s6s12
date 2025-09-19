import { useState, useEffect } from "react";
import axios from "axios";

export default function DetalleUsuarioAsync() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUsuario(res.data);
      } catch {
        setError("Error al cargar el usuario");
      } finally {
        setCargando(false);
      }
    };
    obtenerUsuario();
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Detalle del Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
    </div>
  );
}
