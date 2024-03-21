import express from "express";
import { router } from "./routes";
import { sqliteConnection } from "./databases/sqlite3";
import { runMigrations } from "./databases/sqlite3/migrations";
import { AppErrors } from "./middlewares/appErrors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.use(AppErrors);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error(error));

runMigrations();
