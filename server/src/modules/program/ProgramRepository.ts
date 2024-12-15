import DatabaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("SELECT * FROM program");
    return rows as program[];
  }
}

export default new ProgramRepository();
