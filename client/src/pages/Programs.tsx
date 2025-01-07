import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import type { movieDataType } from "../assets/lib/definition";

export default function Programs() {
  const movieData = useLoaderData() as movieDataType[];

  console.info(movieData);
  return (
    <>
      <ul>
        {movieData.map((m) => (
          <li key={m.id}>
            <Link to={`/programs/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/programs/add">Ajouter</Link>
    </>
  );
}
