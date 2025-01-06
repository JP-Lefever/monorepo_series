import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

export default function ProgramForm({
  children,
  defaultValue,
  onSubmit,
}: ProgramFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = Number.parseInt(formData.get("year") as string);

        onSubmit({
          title,
          synopsis,
          poster,
          country,
          year,
        });
      }}
    >
      <input type="text" name="title" defaultValue={defaultValue.title} />
      <input
        type="textarea"
        name="synopsis"
        defaultValue={defaultValue.synopsis}
      />
      <input type="text" name="poster" defaultValue={defaultValue.poster} />
      <input type="text" name="country" defaultValue={defaultValue.country} />
      <input type="number" name="year" defaultValue={defaultValue.year} />
      <button type="submit">{children}</button>
    </form>
  );
}
