import { useLoaderData } from "react-router-dom";
import type { movieDataType } from "../assets/lib/definition";

export default function Programs() {
  const movieData = useLoaderData() as movieDataType[];
  console.info(movieData);
  return <></>;
}
