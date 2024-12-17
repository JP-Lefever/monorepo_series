import DatabaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

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
  async read(id: number) {
    const [rows] = await DatabaseClient.query<Rows>(
      "SELECT title, synopsis, poster,country, year FROM program WHERE id=?",
      [id],
    );
  }
  async update(program: program) {
    const [result] = await DatabaseClient.query<Result>(
      "UPDATE program SET name = ?, synopsis = ?, poster = ?, country = ?, year = ? WHERE id = ?",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.id,
      ],
    );

    return result.affectedRows;
  }
  async create(program: Omit<program, "id">) {
    const [result] = await DatabaseClient.query<Result>(
      "INSERT INTO program (title,synopsis, poster, country, year) VALUES (?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
      ],
    );
    return result.insertId;
  }
  async delete(id: number) {
    const [result] = await DatabaseClient.query<Result>(
      "DELETE FROM program WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ProgramRepository();
