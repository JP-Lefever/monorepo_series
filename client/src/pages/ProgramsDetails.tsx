import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgramDeleteForm from "../components/ProgramDeleteForm";

type ProgramDetail = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function programsDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | ProgramDetail);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: ProgramDetail) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <section>
          <Link to={`/programs/${id}/edit`}>Modifier</Link>
          <ProgramDeleteForm id={String(id)}>Supprimer</ProgramDeleteForm>
        </section>
        <section>
          <h1>{program.title}</h1>
          <img src={program.poster} alt={program.title} />
          <p>{program.country}</p>
          <p>{program.year}</p>
          <p>{program.synopsis}</p>
        </section>
      </>
    )
  );
}
