import ProgramForm from "../components/ProgramForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  country: string;
  year: number;
  poster: string;
};

export default function ProgramEdit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <ProgramForm
        defaultValue={program}
        onSubmit={(programData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(programData),
          })
            .then((response) => response.json())
            .then((data) => {
              navigate(`/programs/${data.insertId}`);
            });
        }}
      >
        Modifier
      </ProgramForm>
    )
  );
}
