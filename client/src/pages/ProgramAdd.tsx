import { useNavigate } from "react-router-dom";
import ProgramForm from "../components/ProgramForm";

export default function ProgramAdd() {
  const navigate = useNavigate();

  const newProgram = {
    title: "",
    poster: "",
    synopsis: "",
    country: "",
    year: 2010,
  };

  return (
    <ProgramForm
      defaultValue={newProgram}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_MOVIE_DATA}`, {
          method: "post",
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
      Ajouter
    </ProgramForm>
  );
}
