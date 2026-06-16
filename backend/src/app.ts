import express from "express";
import cors from "cors";
import { pool } from "./database/db";
import { getAllFolders } from "./repositories/folder.repository";
import { getFolderTree } from "./services/folder.service";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.get("/folders", async (_req, res) => {
  const folders = await getAllFolders();

  res.json(folders);
});

app.get("/folders/tree", async (_req, res) => {
  const tree = await getFolderTree();

  res.json(tree);
});

pool.query("SELECT NOW()")
  .then(result => {
    console.log("Database connected");
    console.log(result.rows);
  })
  .catch(error => {
    console.error("Database error:", error);
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});