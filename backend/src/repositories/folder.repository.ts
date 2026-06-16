import { pool } from "../database/db";

export async function getAllFolders() {
  const result = await pool.query(
    `
      SELECT id, name, parent_id
      FROM folders
      ORDER BY id
    `
  );

  return result.rows;
}