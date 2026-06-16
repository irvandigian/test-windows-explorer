import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "explorer_db",
  user: "postgres",
  password: "gian1234",
});